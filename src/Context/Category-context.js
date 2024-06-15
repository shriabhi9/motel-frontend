import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const initialValue = {
  hotelCategory: "National Parks"
};

export const CategoryContext = createContext(initialValue);

export const CategoryProvider = ({ Children }) => {
  const [state, setState] = useState(initialValue);
  
  return (
    <CategoryContext.Provider value ={{ state, setState }}>
      {Children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);


