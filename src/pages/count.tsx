import SiteHeader from "@/components/header";
import useFormStore from "@/stores/formStore";
import { Typography } from "@mui/material";
import { useEffect } from "react";

const Count = () => {
  const { count, getCount } = useFormStore();
  useEffect(() => {
    getCount();
  }, []);
  return (
    <>
      <SiteHeader />
      <Typography variant="body1">Total signatures: {count}</Typography>
    </>
  );
};

export default Count;
