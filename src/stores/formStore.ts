import axios from "axios";
import { FormEvent } from "react";
import { create } from "zustand";

interface FormState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  submit: (event: FormEvent<HTMLFormElement>) => void;
  success: boolean;
  fail: boolean;
  setSuccess: (success: boolean) => void;
  setFail: (fail: boolean) => void;
}

const useFormStore = create<FormState>((set, get) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  name: "",
  email: "",
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  submit: async (event) => {
    event.preventDefault();
    const { name, email, setLoading, setFail, setSuccess } = get();
    if (name !== "" || email !== "") {
      try {
        setLoading(true);
        await axios.post(`/api/save`, {
          name,
          email,
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
}));

export default useFormStore;
