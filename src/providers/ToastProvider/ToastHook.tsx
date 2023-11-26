import { useToastDispatchContext } from "./ToastContext";

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
