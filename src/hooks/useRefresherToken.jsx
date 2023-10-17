import axios from "../api/axios";
import { useAuth } from "../context/AuthenticationContext";
function useRefresherToken() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const REFRESH_URL = "/refresh";

    const response = await axios.get(REFRESH_URL, { withCredentials: true });

    const foundUser = response?.data?.user;

    const accessToken = response?.data?.accessToken;

    setAuth((prev) => {
      return { ...prev, foundUser, accessToken };
    });
  };

  return refresh;
}

export default useRefresherToken;
