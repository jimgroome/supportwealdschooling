import { Grid, Typography } from "@mui/material";

interface HeaderProps {}

const Header = ({}: HeaderProps) => (
  <Grid container spacing={2} mb={4} pt={2}>
    <Grid item xs={12}>
      <Typography variant="h3" component="h1">
        Support Weald Schooling
      </Typography>
    </Grid>
  </Grid>
);

export default Header;
