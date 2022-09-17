import React, { createContext, useState} from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [order, setorder] = useState([]);
  const [logindata, setlogin] = useState(false);
  
  return (
    <MyContext.Provider
      value={{order,setorder,logindata,setlogin}}
    >
          {children}
    </MyContext.Provider>
  );
};

export default AppContext;