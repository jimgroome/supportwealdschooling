import useFormStore from "@/stores/formStore";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";

const PetitionForm = () => {
  const { loading, name, setName, email, setEmail, submit } = useFormStore();
  return (
    <Box component="form" onSubmit={(event) => submit(event)} mb={4}>
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
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        Sign
      </Button>
    </Box>
  );
};

export default PetitionForm;
