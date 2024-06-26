import useFormStore from "@/stores/formStore";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
} from "@mui/material";

const PetitionForm = () => {
  const {
    loading,
    name,
    setName,
    email,
    setEmail,
    postcode,
    setPostcode,
    optIn,
    setOptIn,
    submit,
  } = useFormStore();
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
      <Box mb={2}>
        <InputLabel htmlFor="email" sx={{ mb: 1 }}>
          Postcode
        </InputLabel>
        <TextField
          name="postcode"
          id="postcode"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          fullWidth
          type="text"
          sx={{ textTransform: "uppercase" }}
        />
      </Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Checkbox checked={optIn} onChange={() => setOptIn(!optIn)} />
          }
          label="Keep up to date with news about this campaign. We'll keep communication to a minimum."
        />
      </Box>
      <Button type="submit" variant="contained" fullWidth disabled={loading}>
        Sign
      </Button>
    </Box>
  );
};

export default PetitionForm;
