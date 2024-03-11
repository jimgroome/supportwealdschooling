import { Grid, Typography } from "@mui/material";
import PetitionForm from "./petition-form";

const Start = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" mb={2}>
          Does your child have to travel miles to and from school each day?
        </Typography>

        <Typography variant="body1" mb={2}>
          Does it mean your child&rsquo;s schoolfriends live miles away?
        </Typography>

        <Typography variant="body1" mb={2}>
          Is your child dependent upon school bus timetables?
        </Typography>

        <Typography variant="body1" mb={2}>
          Does this mean not participating in after school activities?
        </Typography>

        <Typography variant="body1" mb={2}>
          Or do you have to fight the traffic to get your child to school?
        </Typography>

        <Typography variant="body1" mb={2}>
          This is unacceptable: our children deserve and need better!
        </Typography>

        <Typography variant="body1" mb={2}>
          Sign the petition expressing your concern and demanding action be
          taken to build a new secondary school for The Weald.
        </Typography>
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <PetitionForm />
      </Grid>
    </Grid>
  </>
);

export default Start;