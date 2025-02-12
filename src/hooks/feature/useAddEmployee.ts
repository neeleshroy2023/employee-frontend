import { useState } from "react";
import { useNavigate } from "react-router";
import useApiRequest from "../useApiRequest";
import API_KEYS from "../../api/keys";

export const useAddEmployee = () => {
  const [departments, setDepartments] = useState("");
  const navigate = useNavigate();
  const { loading, error, getData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`,
    "POST"
  );

  const handleChange = (event: any) => {
    setDepartments(event.target.value);
  };

  const handleFormSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    await getData({
      body: JSON.stringify({
        firstName: e.target.elements.firstName.value,
        lastName: e.target.elements.lastName.value,
        email: e.target.elements.email.value,
        position: e.target.elements.position.value,
        department: departments,
        salary: e.target.elements.salary.value,
      }),
    });
    navigate("/employees");
  };

  return { departments, loading, error, handleChange, handleFormSubmit };
};
