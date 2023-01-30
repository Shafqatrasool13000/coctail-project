import axios from "axios";
import { useRef } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useQueryHookByIdParams } from "../../types";

// use Query Custom Hook for data and error
export const useQueryHookById = ({
  queryName,
  pendingText,
  url,
  pendingType = "info",
  onError,
  successText,
  successType = "success",
  queryId,
  enabled = true,
  select = true,
  selectData,
}: useQueryHookByIdParams) => {
  const toastId = useRef<any>(null);

  // api data promise
  const fetchDataHanlder = async ({ queryKey }: any) => {
    toastId.current = toast(pendingText, {
      type: pendingType,
    });
    const response = await axios(url + queryKey[1]);
    return response.data;
  };
  // api data by use-query
  return useQuery([queryName, queryId], fetchDataHanlder, {
    onSuccess: () => {
      toastId.current = toast.update(toastId.current, {
        render: successText,
        type: successType,
        autoClose: 1000,
      });
    },
    refetchOnWindowFocus: false,
    enabled,
    select: (data: any) => {
      if (select) {
        if (data.drinks) {
          const newData = data.drinks.map((drinkData: any) => {
            const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } =
              drinkData;
            return {
              id: idDrink,
              name: strDrink,
              glass: strGlass,
              info: strAlcoholic,
              image: strDrinkThumb,
              ...drinkData,
            };
          });
          return { ...data, drinks: newData };
        }
        return { ...data, drinks: [] };
      } else {
        return data;
      }
      return data;
    },
    onError: () => {
      toastId.current = toast.update(toastId.current, {
        render: "something went Wrong",
        type: "error",
        autoClose: 1000,
      });
    },
  });
};
