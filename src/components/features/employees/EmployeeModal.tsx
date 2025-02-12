import { Modal, Box, Typography, Button } from "@mui/material";
import useApiRequest from "../../../hooks/useApiRequest";
import API_KEYS from "../../../api/keys";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EmployeeModal = ({
  open,
  handleClose,
  employee,
  onDeleteEmployee,
}: any) => {
  const { deleteData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}/${employee.id}`,
    "DELETE"
  );

  const handleDelete = async () => {
    try {
      await deleteData();
      onDeleteEmployee(employee.id);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6">Employee Details</Typography>
        <Typography sx={{ mt: 2 }}>
          Name: {employee.firstName} {employee.lastName}
        </Typography>
        <Typography sx={{ mt: 1 }}>Email: {employee.email}</Typography>
        <Typography sx={{ mt: 1 }}>Position: {employee.position}</Typography>
        <Typography sx={{ mt: 1 }}>
          Department: {employee.department}
        </Typography>
        <Typography sx={{ mt: 1 }}>Salary: {employee.salary}</Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ mt: 2 }}
        >
          Delete Employee
        </Button>
      </Box>
    </Modal>
  );
};

export default EmployeeModal;
