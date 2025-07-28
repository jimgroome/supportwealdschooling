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
      {message.length === 0 ? (
        <Typography variant="body1" marginBottom={10}>
          Loading...
        </Typography>
      ) : (
        message.map((line, index) => (
          <Typography variant="body1" key={index} marginBottom={2}>
            {line}
          </Typography>
        ))
      )}
    </>
  );
};

export default Count;
