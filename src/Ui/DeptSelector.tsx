import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useApiRequest from "../hooks/useApiRequest";
import API_KEYS from "../api/keys";

export default function DeptSelector({ onDeptChange }: any) {
  const { getData, data } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS?.departments}`
  );
  console.log(data);
  useEffect(() => {
    const fetchDepartments = async () => {
      await getData();
    };
    fetchDepartments();
  }, []);
  i  const handleChange = (event: any) => {
    onDeptChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={"Departments"}
          onChange={handleChange}
        >
          {data.map((employee: any) => {
            return (
              <MenuItem key={employee.id} value={employee.id}>
                {employee.id}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
