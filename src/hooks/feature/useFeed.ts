import API_KEYS from "../../api/keys";
import securedFetch from "../../utils/securedFetch";
const useFeed = async () => {
  const data = await securedFetch(
    import.meta.env.VITE_HOST_URL,
    API_KEYS.employees
  );

  console.log(data);

  const employeesData = await data.json();

  console.log(employeesData);

  return employeesData;
};

export default useFeed;
