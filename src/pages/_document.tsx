import Header from "@/components/header";
import { Container, CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <CssBaseline />
        <Header />
        <Container>
          <Main />
        </Container>
        <NextScript />
        <GoogleAnalytics gaId="G-PWM6CGKJG0" />
        <Footer />
      </body>
    </Html>
  );
}
