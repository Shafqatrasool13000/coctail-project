import axios from "axios";
import { useRef } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useMutationHookByIdParams } from "../../types";

const useMutationBydIdHook = ({
  url,
  data,
  queryId,
  onError,
  pendingText,
  pendingType,
  successText,
  successType,
}: useMutationHookByIdParams) => {
  const toastId = useRef<any>(null);
  // charge on card promise
  const apiPromiseHandler = async () => {
    const toastId = useRef<any>(null);
    toastId.current = toast(pendingText, {
      type: pendingType,
    });
    const { data: response } = await axios.post(
      url,
      data
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${LoggedInHandler() && LoggedInHandler()}`,
      //     },
      //   }
    );
    return response.data;
  };

  return useMutation([apiPromiseHandler, queryId], {
    onSuccess: () => {
      toast.update(toastId.current, {
        render: successText,
        type: successType,
        autoClose: 1000,
      });
    },
    onError,
  });
};

export default useMutationBydIdHook;
