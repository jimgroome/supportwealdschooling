import type { Metadata } from "next";
import Container from "./container";

export const metadata: Metadata = {
  title: "Support Weald Schooling",
  description: "Generated by create next app 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Container>{children}</Container>
    </html>
  );
}
