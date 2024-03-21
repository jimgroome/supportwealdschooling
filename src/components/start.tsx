import { Button, Grid, Typography } from "@mui/material";
import PetitionForm from "./petition-form";
import Link from "next/link";
import { facebookUrl } from "@/consts";

const Start = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" mb={2}>
          Support Weald Schooling is a campaign which is working to get a new,
          non selective secondary school built to serve a large area of The
          Weald. There is no such provision for many miles for a lot of
          children. This is unacceptable.
        </Typography>
        <Typography variant="body1" mb={2}>
          We need your support. Please register your concern by signing the
          petition calling for a new school, which will go to the Department for
          Education.
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PetitionForm />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" mb={2}>
          For a detailed analysis of the situation please{" "}
          <Link href={facebookUrl} target="_blank">
            follow our Facebook page
          </Link>
          . Updates from the campaign will be posted here regularly. They can
          also be accessed on your parish council website.
        </Typography>
      </Grid>
    </Grid>
  </>
);

export default Start;
