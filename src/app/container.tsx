import { CssBaseline } from "@mui/material";
import { Container as MuiContainer } from "@mui/material";
import Header from "./components/header";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <body>
    <CssBaseline />
    <MuiContainer>
      <Header />
      {children}
    </MuiContainer>
  </body>
);

export default Container;
