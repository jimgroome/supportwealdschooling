import { facebookUrl } from "@/consts";
import { Typography } from "@mui/material";
import Link from "next/link";

const Success = () => (
  <Typography variant="body1">
    Thank you for signing the petition! Be sure to{" "}
    <Link href={facebookUrl} target="_blank">
      follow our Facebook page
    </Link>{" "}
    for news and updates.
  </Typography>
);

export default Success;
