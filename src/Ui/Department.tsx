import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useApiRequest from "../hooks/useApiRequest";
import API_KEYS from "../api/keys";

export default function Department() {
  const [departments, setDepartments] = useState([]);
  console.log(departments);
  const { getData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS?.departments}`
  );
  useEffect(() => {
    const func = async () => {
      await getData();
    };
    func();
  }, []);
  const handleChange = (event: any) => {
    setDepartments(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={departments}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value={"dept-1"}>dept-1</MenuItem>
          <MenuItem value={"dept-2"}>dept-2</MenuItem>
          <MenuItem value={"dept-3"}>dept-3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
