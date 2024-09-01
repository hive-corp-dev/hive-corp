"use client";

import React, { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderContextProvider = ({ children }) => {
  const [headerIsWhite, setHeaderIsWhite] = useState(false);

  return <HeaderContext.Provider value={{ headerIsWhite, setHeaderIsWhite }}>{children}</HeaderContext.Provider>;
};
