import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const initialValue = "";


export const UserContext = createContext(initialValue);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue);
    
  return (
    <userContext.Provider value ={{ userName, setUserName }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserProperty = () => useContext(UserContext);