import React, { useState, createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState("Alex");

  return (
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
