type promiseInfoTypes = "info" | "success" | "warning" | "error" | "default";

// query hook params type
export type useQueryHookParams = {
  queryName: string;
  url: string;
  pendingType?: promiseInfoTypes;
  successType?: promiseInfoTypes;
  pendingText: string;
  successText: string;
  enabled?: boolean;
  select?: boolean;
  selectData?: (data: any) => any;
  onError?: (toastId: any) => void;
};
// query custom hook params type
export type useQueryCustomHookParams = {
  queryName: string;
  url: string;
  pendingText: string;
  pendingType: promiseInfoTypes;
  onSuccess: (toastId: any) => void;
  onError: (toastId: any) => void;
};
// query hook by id params type
export type useQueryHookByIdParams = {
  queryName: string;
  url: string;
  queryId: string | number;
  pendingType?: promiseInfoTypes;
  successType?: promiseInfoTypes;
  pendingText: string;
  successText: string;
  enabled?: boolean;
  select?: boolean;
  selectData?: (data: any) => any;
  onError?: (toastId: any) => void;
};

// useMutation hook params type
export type useMutationHookParams = {
  data: any;
  url: string;
  pendingType: promiseInfoTypes;
  successType: promiseInfoTypes;
  pendingText: string;
  successText: string;
  onError: (toastId: any) => void;
};
// useMutation custom hook params type
export type useMutationCustomHookParams = {
  data: any;
  url: string;
  pendingText: string;
  pendingType: promiseInfoTypes;
  onSuccess: (toastId: any) => void;
  onError: (toastId: any) => void;
};
// useMutation hook by id params type
export type useMutationHookByIdParams = {
  data: any;
  url: string;
  queryId: string | number;
  pendingType: promiseInfoTypes;
  successType: promiseInfoTypes;
  pendingText: string;
  successText: string;
  onError: (toastId: any) => void;
};
