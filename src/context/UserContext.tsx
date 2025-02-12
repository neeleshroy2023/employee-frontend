import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [isUser, setIsUser] = useState(false);
  return <UserContext.Provider value={{isUser, setIsUser}}>{children}</UserContext.Provider>;
};
