import { createContext, useState } from "react";

// Create the ToastContext
export const ToastContext = createContext<any>(null);

export const ToastProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<any>([]);

  const addToast = (type: "success" | "error", message: string, id:string) => {
    // const id = Math.random().toString(36).substr(2, 9);
    setToasts((prevToasts: any) => [
      ...prevToasts,
      {
        id,
        type,
        message,
      },
    ]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts: any) => prevToasts.filter((t: any) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};
