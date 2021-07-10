import { useCallback } from "react";
import axios from "axios";
import { useUpdateLogin } from "../Store";
export const useLogout = () => {
  const updateUser = useUpdateLogin();
  const handleLogout = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/login/logout",

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      await updateUser(response.data);
    } catch (err) {
      if (err) throw err;
    }
  }, [updateUser]);

  return handleLogout;
};
