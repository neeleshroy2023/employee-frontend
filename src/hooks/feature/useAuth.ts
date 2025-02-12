import { useNavigate } from "react-router";
import API_KEYS from "../../api/keys";
import { useState } from "react";

const useAuth = () => {
  const [err, setError] = useState(false);
  const navigate = useNavigate();
  const handleRegister = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    window.localStorage.clear();
    const email = e.target.elements.registerEmail.value;
    const password = e.target.elements.registerPassword.value;
    const employeeId = e.target.elements.registerEmployeeId.value;

    fetch(`${import.meta.env.VITE_HOST_URL}${API_KEYS.register}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, employeeId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          navigate("/login", {
            state: { email: data.email },
          });
        }
      });
  };

  const handleLogin = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const email = e.target.elements.loginEmail.value;
    const password = e.target.elements.loginPassword.value;

    fetch(`${import.meta.env.VITE_HOST_URL}${API_KEYS.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token || "");
        navigate("/employees");
      });
  };

  return { handleRegister, handleLogin, err };
};

export default useAuth;
