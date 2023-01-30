import axios from "axios";
import { useRef } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useQueryCustomHookParams } from "../../types";

// use query custom hook
export const useQueryHookById = ({
  queryName,
  url,
  pendingType = "info",
  pendingText,
  onSuccess,
  onError,
}: useQueryCustomHookParams) => {
  const toastId = useRef<any>(null);

  // api data promise
  const fetchDataHanlder = () => {
    toastId.current = toast(pendingText, {
      type: pendingType,
    });
    const response = axios(url);
    return response;
  };

  // api data by use-Query
  return useQuery(queryName, fetchDataHanlder, {
    onSuccess: () => onSuccess(toastId),
    refetchOnWindowFocus: false,
    onError: () => onError(toastId),
  });
};
