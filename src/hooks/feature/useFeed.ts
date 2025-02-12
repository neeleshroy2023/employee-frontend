import API_KEYS from "../../api/keys";
import securedFetch from "../../utils/securedFetch";
const useFeed = async () => {
  const data = await securedFetch(
    import.meta.env.VITE_HOST_URL,
    API_KEYS.employees
  );

  const employeesData = await data.json();

  return employeesData;
};

export default useFeed;
