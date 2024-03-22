import Fail from "@/components/fail";
import SiteHeader from "@/components/header";
import Start from "@/components/start";
import Success from "@/components/success";
import useFormStore from "@/stores/formStore";
import { Grid, Typography } from "@mui/material";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const Home = () => {
  const { success, fail } = useFormStore();
  return (
    <>
      <Head>
        <title>Support Weald Schooling</title>
      </Head>
      <GoogleAnalytics gaId="G-PWM6CGKJG0" />

      <SiteHeader />

      {!success && !fail ? <Start /> : null}
      {success ? <Success /> : null}
      {fail ? <Fail /> : null}
    </>
  );
};

export default Home;
