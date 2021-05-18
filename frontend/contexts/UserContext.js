import React, { useContext, createContext } from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  
  const [Con, setCon] = React.useState(null);

  function Setter(val){
    setCon(val)
  }

  const values = {Setter,Con,};

  return (
    <UserContext.Provider value={values}>{children}</UserContext.Provider>
  );
}
