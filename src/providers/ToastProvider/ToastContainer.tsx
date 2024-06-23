import Toast from "../../components/Toast";
import { useToastDispatchContext } from "../../hooks/toast";

export default function ToastContainer() {
  const { toasts } = useToastDispatchContext();

  return (
    <div className="absolute bottom-10 w-full left-0 z-50 flex items-left justify-end">
      <div className="w-1/4">
        {toasts &&
          toasts.map((toast: { id: string; type: string; message: string }) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
      </div>
    </div>
  );
}
