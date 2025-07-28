import SiteHeader from "@/components/header";
import useFormStore from "@/stores/formStore";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const Count = () => {
  const { message, getMessage } = useFormStore();
  useEffect(() => {
    getMessage();
  }, []);
  return (
    <>
      <SiteHeader />
      <Typography variant="body1">{message}</Typography>
    </>
  );
};

export default Count;
