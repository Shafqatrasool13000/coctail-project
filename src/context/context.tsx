import React, { useState, useContext, useEffect } from "react";
import { useQueryHookById } from "../hooks/ReactQueryHooks/QueryHooks/useRQHookByID";
import { drinks_url } from "../utils/api-urls";
import { queries } from "../utils/queries";

type contextApiData = {
  loading: boolean;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  coctails: any;
  // setCoctails: React.Dispatch<React.SetStateAction<any>>;
  fetch_Coctails: any;
};

const AppContext = React.createContext({} as contextApiData);

type appProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<appProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");

  const {
    isLoading,
    data: coctails,
    refetch: fetch_Coctails,
  }: any = useQueryHookById({
    queryId: searchTerm,
    url: drinks_url,
    queryName: queries.get_coctails,
    pendingText: "get coctails",
    successText: "coctails got successfully",
  });

  return (
    <AppContext.Provider
      value={{
        loading: isLoading,
        setSearchTerm,
        coctails,
        // setCoctails,
        fetch_Coctails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
