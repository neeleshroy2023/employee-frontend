import { useState } from "react";
import { useNavigate } from "react-router";
import API_KEYS from "../api/keys";
import useApiRequest from "./useApiRequest";

const useAddEmployee = () => {
  const navigate = useNavigate();
  const { getData } = useApiRequest(
    `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`,
    "POST"
  );

  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    await getData({
      body: JSON.stringify(newEmployee),
    });
    navigate("/employees");
    console.log(newEmployee);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_HOST_URL}${API_KEYS.employees}`,
        {
          method: "POST",
          body: JSON.stringify(newEmployee),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      navigate("/employees");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    newEmployee,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useAddEmployee;
