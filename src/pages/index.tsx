import Fail from "@/components/fail";
import Start from "@/components/start";
import Success from "@/components/success";
import useFormStore from "@/stores/formStore";
import { Grid, Typography } from "@mui/material";
import Head from "next/head";

const Home = () => {
  const { success, fail } = useFormStore();
  return (
    <>
      <Head>
        <title>Support Weald Schooling</title>
      </Head>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" mb={4}>
            Support Weald Schooling
          </Typography>
        </Grid>
      </Grid>
      {!success && !fail ? <Start /> : null}
      {success ? <Success /> : null}
      {fail ? <Fail /> : null}
    </>
  );
};

export default Home;
