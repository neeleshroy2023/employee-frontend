import { useNavigate } from "react-router";
import API_KEYS from "../../api/keys";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const useAuth = () => {
  const navigate = useNavigate();
  const { setIsUser }: any = useContext(UserContext);
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
        navigate("/login", {
          state: { email: data.email },
        });
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
        setIsUser(true);
      });
  };

  return { handleRegister, handleLogin };
};

export default useAuth;
