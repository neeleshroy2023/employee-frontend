import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if(token){
      setIsUser(true)
    }
  }, [])
  return <UserContext.Provider value={{isUser, setIsUser}}>{children}</UserContext.Provider>;
};
