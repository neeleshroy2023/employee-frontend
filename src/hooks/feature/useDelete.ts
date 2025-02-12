import { useNavigate } from "react-router";
import API_KEYS from "../../api/keys";
import useApiRequest from "../useApiRequest";
import { useState } from "react";

export const useDelete = (id: string) => {
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
    await getData();
    navigate("/employees");
  };

  return {handleOpen, open, handleClose, handleDelete}
};
