// import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircularProgress, Typography } from "@mui/material";
import { useSelect } from "../hooks/feature/useSelect";

type TbasicSectProps = {
    id: string,
    handleChange: (e) => void,
    departments: string
}

export default function BasicSelect({id, handleChange, departments}: TbasicSectProps) {
//   const [age, setAge] = useState("");
const {data, error, loading} = useSelect()

//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setAge(event.target.value);
//   };

  if(error){
    return <Typography>{error.message}</Typography>
  }

  if(loading){
    return <CircularProgress />
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
          {data.map((employee) => (
            <MenuItem key={employee?.id} id={id} value={employee?.id}>{employee?.id}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
