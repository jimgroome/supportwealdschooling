import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { facebookUrl } from "@/consts";

const SiteHeader = () => {
  const drawerWidth = 240;

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Facebook", href: facebookUrl, target: "_blank" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy", href: "/privacy" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    console.log("fewfew");
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="h1"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Support Weald Schooling
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={`lg-${item.text}`}
                sx={{ color: "#fff" }}
                href={item.href}
                target={item.target || undefined}
                onClick={() => console.log("object")}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2, px: 1 }}>
              Support Weald Schooling
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={`sm-${item.text}`} disablePadding>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    href={item.href}
                    target={item.target || undefined}
                  >
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>

      <Toolbar sx={{ mb: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" mb={4}>
            Support Weald Schooling
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SiteHeader;
