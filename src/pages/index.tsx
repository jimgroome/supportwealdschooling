import Fail from "@/components/fail";
import SiteHeader from "@/components/header";
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

      <SiteHeader />

      {!success && !fail ? <Start /> : null}
      {success ? <Success /> : null}
      {fail ? <Fail /> : null}
    </>
  );
};

export default Home;
