import { useCallback } from "react";
import axios from "axios";
import { useUpdateLogin } from "../Store";
export const useLogout = () => {
  const updateUser = useUpdateLogin();
  const handleLogout = useCallback(async () => {
    try {
      const response = await axios.get(
        "/login/logout",

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      await updateUser(response.data);
      response.data && window.location.reload();
    } catch (err) {
      if (err) throw err;
    }
  }, [updateUser]);

  return handleLogout;
};
