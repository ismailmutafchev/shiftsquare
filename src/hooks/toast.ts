import { useContext } from "react";
import { ToastContext } from "../providers/ToastProvider/ToastContext";

export const useToastDispatchContext = () => {
    const toastDispatch = useContext(ToastContext);
    if (!toastDispatch) {
      throw new Error(
        "useToastDispatchContext must be used within a ToastProvider"
      );
    }
    return toastDispatch;
  };
  
  export const useToastStateContext = () => {
    const toasts  = useContext(ToastContext);
    if (!toasts) {
      throw new Error("useToastStateContext must be used within a ToastProvider");
    }
    return toasts.toasts;
  };

export function useToast(delay: number) {
  const dispatch = useToastDispatchContext();

  function toast(type: "success" | "error", message: string) {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch.addToast(type, message, id);

    setTimeout(() => {
      dispatch.removeToast(id);
    }, delay);
  }

  return toast;
}
