import axiosinstance from "../axios/AxiosInstance";
import { setUser } from "../UserManagement";

export default function getbalance() {
  var val = axiosinstance.post("/api/UserManagement/User-Context").then(
    (response) => {
      setUser(response.data);
      return true;
    },
    (error) => {
      return false;
    }
  );

  return val;
}
