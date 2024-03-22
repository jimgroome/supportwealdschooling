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
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPostcode: (postcode: string) => void;
  submit: (event: FormEvent<HTMLFormElement>) => void;
  success: boolean;
  fail: boolean;
  setSuccess: (success: boolean) => void;
  setFail: (fail: boolean) => void;
  getCount: () => void;
  count: string;
}

const useFormStore = create<FormState>((set, get) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  name: "",
  email: "",
  postcode: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPostcode: (postcode) => set({ postcode }),
  submit: async (event) => {
    event.preventDefault();
    const { name, email, postcode, setLoading, setFail, setSuccess } = get();
    if (name !== "" || email !== "") {
      try {
        setLoading(true);
        await axios.post(`/api/save`, {
          name,
          email,
          postcode,
        });
        sendGAEvent({
          event: "Form submission",
          value: { name, email, postcode },
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
}));

export default useFormStore;
