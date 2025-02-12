import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { TbasicModel } from "../types/uiType";
import { style } from "../css/constants";
import { useDelete } from "../hooks/feature/useDelete";

export default function BasicModal({ firstName, id }: TbasicModel) {
  const {handleOpen, open, handleClose, handleDelete } = useDelete(id)

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

          <DeleteIcon
            color="secondary"
            sx={{ cursor: "pointer" }}
            onClick={handleDelete}
          />
        </Box>
      </Modal>
    </div>
  );
}
