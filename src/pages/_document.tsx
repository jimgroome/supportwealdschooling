import Header from "@/components/header";
import { Container, CssBaseline } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <CssBaseline />
        <Header />
        <Container>
          {/* <Header /> */}
          <Main />
        </Container>
        <NextScript />
      </body>
    </Html>
  );
}
