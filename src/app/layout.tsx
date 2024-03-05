import type { Metadata } from "next";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Support Weald Schooling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <CssBaseline />
      <body>
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
