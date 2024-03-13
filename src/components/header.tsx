import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { facebookUrl } from "@/consts";

const Header = () => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" component="h1">
          Support Weald Schooling
        </Typography>
        <Box flexGrow={1}></Box>
        <IconButton
          size="large"
          color="inherit"
          href={facebookUrl}
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Toolbar sx={{ mb: 4 }} />
  </>
);

export default Header;
