import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircularProgress, Typography } from "@mui/material";
import { useSelect } from "../hooks/feature/useSelect";
import { TbasicSelectProps } from "../types/uiType";

export default function BasicSelect({
  id,
  handleChange,
  departments,
}: TbasicSelectProps) {
  const { data, error, loading } = useSelect();

  if (error) {
    return <Typography>{error.message}</Typography>;
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ mb: "16px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Departments</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={departments}
          label="Age"
          onChange={handleChange}
        >
          {data.map((employee: any) => (
            <MenuItem key={employee?.id} id={id} value={employee?.id}>
              {employee?.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
