import { Typography } from "@mui/material";
import Link from "next/link";

const Contact = () => (
  <>
    <Typography variant="body1">
      You can email us at{" "}
      <Link href="mailto:info@supportwealdschooling.co.uk">
        info@supportwealdschooling.co.uk
      </Link>
      .
    </Typography>
  </>
);

export default Contact;
