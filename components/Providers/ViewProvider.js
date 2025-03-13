"use client";

import { createContext, useState, useEffect } from "react";
export const ViewContext = createContext();

const ViewProvider = ({ children, locale }) => {
  const [listState, setListState] = useState(true);

  return (
    <ViewContext.Provider
      value={{
        listState,
        setListState,
      }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewProvider;
