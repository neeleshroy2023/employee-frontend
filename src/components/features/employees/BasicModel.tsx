import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import useApiRequest from "../../../hooks/useApiRequest";
import API_KEYS from "../../../api/keys";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type TfirstName = {
  firstName: string,
  id: string,
};

export default function BasicModal({ firstName, id }: TfirstName) {
  const { getData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}/${id}`,
    "DELETE"
  );
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    setOpen(false);
    const abc = await getData();
    console.log(abc);
    navigate("/employees");
  };

  return (
    <div>
      <Button color="secondary" onClick={handleOpen}>
        {firstName}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Employee Name : {firstName}
          </Typography>
          
            <DeleteIcon color="secondary" sx={{cursor: "pointer"}} onClick={handleDelete} />
          
        </Box>
      </Modal>
    </div>
  );
}
