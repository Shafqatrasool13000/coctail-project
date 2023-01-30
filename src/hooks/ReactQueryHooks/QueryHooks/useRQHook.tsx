import axios from "axios";
import { useRef } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useQueryHookParams } from "../../types";

// Simple UseQuery Hook
const useQueryHook = ({
  queryName,
  url,
  pendingType = "info",
  successType = "success",
  pendingText,
  successText,
  onError,
  enabled = true,
  select = true,
  selectData,
}: useQueryHookParams) => {
  const toastId = useRef<any>(null);

  // api data promise
  const fetchDataHanlder = async () => {
    toastId.current = toast(pendingText, {
      type: pendingType,
    });
    const response = await axios(url);
    return response.data;
  };

  // api data by use-Query
  return useQuery(queryName, fetchDataHanlder, {
    onSuccess: () => {
      toast.update(toastId.current, {
        render: successText,
        type: successType,
        autoClose: 1000,
      });
    },
    enabled,
    select: (data) => {
      if (select) {
        const newData = data.drinks.map(
          ({
            idDrink,
            strDrink,
            strGlass,
            strAlcoholic,
            strDrinkThumb,
          }: any) => ({
            id: idDrink,
            name: strDrink,
            glass: strGlass,
            info: strAlcoholic,
            image: strDrinkThumb,
          })
        );
        return { drinks: newData };
      }
      return data;
    },
    refetchOnWindowFocus: false,
    onError: () => {
      toast.update(toastId.current, {
        render: "something went Wrong",
        type: "error",
        autoClose: 1000,
      });
    },
  });
};

export default useQueryHook;
