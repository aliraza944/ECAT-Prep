import { useEffect } from "react";
import { useUpdateLogin } from "../../Store";
import axios from "axios";

const LoginStatus = () => {
  const updateUser = useUpdateLogin();
  const getLongInStatus = async () => {
    const res = await axios("http://localhost:5000/login/status", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    updateUser(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getLongInStatus();
  }, []);
  return <></>;
};
export default LoginStatus;
