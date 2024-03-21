import { Container, CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

const Document = () => (
  <Html lang="en">
    <Head />
    <body>
      <CssBaseline />
      <Container>
        <Main />
      </Container>
      <NextScript />
      <GoogleAnalytics gaId="G-PWM6CGKJG0" />
    </body>
  </Html>
);

export default Document;
