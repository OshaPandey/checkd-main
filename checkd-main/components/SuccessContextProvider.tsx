'use client'
import React, { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

interface SuccessContextProps {
  isPopup: boolean;
  setIsPopup: Dispatch<SetStateAction<boolean>>;
  
}

interface SuccessContextProviderProps {
  children: React.ReactNode;
}

export const SuccessContext = createContext<SuccessContextProps>({
  isPopup: false,
  setIsPopup: () => {},
});

export default function SuccessContextProvider({
  children,
}: SuccessContextProviderProps) {
  const [isPopup, setIsPopup] = useState(false); // set initial value to false instead of true

  return (
    <SuccessContext.Provider value={{ isPopup, setIsPopup }}>
      {children}
    </SuccessContext.Provider>
  );
}