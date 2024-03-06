import { Box, Button, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";

const PetitionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name !== "" || email !== "") {
      try {
        setLoading(true);
        await axios.post(`/api/save`, {
          name,
          email,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("fbhwekl");
    }
  };
  return (
    <Box component="form" onSubmit={(event) => handleSubmit(event)} mb={4}>
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
