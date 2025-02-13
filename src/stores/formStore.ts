import axios from "axios";
import { FormEvent } from "react";
import { create } from "zustand";
import { sendGAEvent } from "@next/third-parties/google";

interface FormState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  name: string;
  email: string;
  postcode: string;
  optIn: boolean;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPostcode: (postcode: string) => void;
  setOptIn: (optIn: boolean) => void;
  submit: (event: FormEvent<HTMLFormElement>) => void;
  success: boolean;
  fail: boolean;
  setSuccess: (success: boolean) => void;
  setFail: (fail: boolean) => void;
  getCount: () => void;
  count: string;
  getSurvey: () => void;
  survey: {
    years: { year: string; count: number }[];
    grandTotal: number;
    totalResponses: number;
  };
}

const useFormStore = create<FormState>((set, get) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  name: "",
  email: "",
  postcode: "",
  optIn: true,
  setOptIn: (optIn) => set({ optIn }),
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPostcode: (postcode) => set({ postcode }),
  submit: async (event) => {
    event.preventDefault();
    const { name, email, postcode, optIn, setLoading, setFail, setSuccess } =
      get();
    if (name !== "" || email !== "") {
      try {
        setLoading(true);
        await axios.post(`/api/save`, {
          name,
          email,
          postcode,
          optIn,
        });
        sendGAEvent({
          event: "Form submission",
          value: { name, email, postcode, optIn },
        });
        setSuccess(true);
      } catch (error) {
        setFail(true);
      }
    } else {
      alert("fbhwekl");
    }
  },
  success: false,
  fail: false,
  setSuccess: (success) => set({ success }),
  setFail: (fail) => set({ fail }),
  getCount: async () => {
    const res = await axios.get("/api/count");
    set({ count: res.data.response });
  },
  count: "",
  getSurvey: async () => {
    const res = await axios.get("/api/survey");
    set({ survey: JSON.parse(res.data.response) });
  },
  survey: { years: [], grandTotal: 0, totalResponses: 0 },
}));

export default useFormStore;
