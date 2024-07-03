import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const initialValue = "National Parks";


export const CategoryContext = createContext(initialValue);

export const CategoryProvider = ({ children }) => {
  const [hotelCategory, setHotelCategory] = useState(initialValue);
  
  
  return (
    <CategoryContext.Provider value ={{ hotelCategory, setHotelCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);


