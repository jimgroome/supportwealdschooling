import { Box, Button, InputLabel, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

const PetitionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
  };
  return (
    <Box component="form" onSubmit={(event) => handleSubmit(event)}>
      <Box mb={2}>
        <InputLabel htmlFor="name" sx={{ mb: 1 }}>
          Name
        </InputLabel>
        <TextField
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
        />
      </Box>
      <Box mb={2}>
        <InputLabel htmlFor="email" sx={{ mb: 1 }}>
          Email
        </InputLabel>
        <TextField
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          type="email"
        />
      </Box>
      <Button type="submit" variant="contained" fullWidth>
        Sign
      </Button>
    </Box>
  );
};

export default PetitionForm;
