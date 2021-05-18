import React, { useContext, createContext } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  function foo() {
    return true;
  }

  const values = {
      foo,
  };

  return (
    <UserContext.provider values={values}>{children}</UserContext.provider>
  );
}
