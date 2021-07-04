import React, { useState, useContext } from "react";

export const loginContext = React.createContext();
const updateLoginContext = React.createContext();
const adminContext = React.createContext();
const updateAdminContext = React.createContext();
export function useLogin() {
  return useContext(loginContext);
}
export function useUpdateLogin() {
  return useContext(updateLoginContext);
}

export function useAdmin() {
  return useContext(adminContext);
}

export function useUpdateAdmin() {
  return useContext(updateAdminContext);
}

export function ContextProvider({ children }) {
  const [user, setUser] = useState({ name: "" });
  const [admin, setAdmin] = useState({ name: "" });
  const setLogin = (loggedUser) => setUser({ ...user, name: loggedUser.name });
  const setMyAdmin = (loggedUser) =>
    setAdmin({ ...admin, name: loggedUser.name });

  return (
    <>
      <loginContext.Provider value={user}>
        <updateLoginContext.Provider value={setLogin}>
          <adminContext.Provider value={admin}>
            <updateAdminContext.Provider value={setMyAdmin}>
              {children}{" "}
            </updateAdminContext.Provider>
          </adminContext.Provider>
        </updateLoginContext.Provider>
      </loginContext.Provider>
    </>
  );
}
