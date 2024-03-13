import { facebookUrl } from "@/consts";
import { Grid, List, ListItem, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => (
  <Grid container>
    <Grid item xs={12}>
      <List component={Stack} direction="row">
        <ListItem>
          <Link href="/">
            <Typography variant="body2">Home</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link href={facebookUrl} target="_blank">
            <Typography variant="body2">Facebook</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/privacy">
            <Typography variant="body2">Privacy</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/contact">
            <Typography variant="body2">Contact</Typography>
          </Link>
        </ListItem>
      </List>
    </Grid>
  </Grid>
);

export default Footer;
