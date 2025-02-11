// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Box, CircularProgress, Typography } from "@mui/material";
// import API_KEYS from "../../../api/keys";

// const EmployeeDetails = () => {
//   const { id } = useParams();
//   const [employee, setEmployee] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setEmployee(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching employee details:", error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (!employee) {
//     return <Typography>No employee found</Typography>;
//   }

//   return (
//     <Box>
//       <Typography variant="h4">Employee Details</Typography>
//       <Typography>
//         Name: {employee.firstName} {employee.lastName}
//       </Typography>
//       <Typography>Email: {employee.email}</Typography>
//       <Typography>Position: {employee.position}</Typography>
//       <Typography>Department: {employee.department}</Typography>
//       <Typography>Salary: {employee.salary}</Typography>
//     </Box>
//   );
// };

// export default EmployeeDetails;
