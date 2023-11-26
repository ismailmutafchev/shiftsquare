import Toast from "../../components/Toast";
import { useToastDispatchContext } from "./ToastContext";
 
export default function ToastContainer() {
  const { toasts } = useToastDispatchContext();


  console.log(toasts,'sdfsdf')
  return (
    <div className="absolute bottom-10 w-full left-0 z-50 flex items-left justify-end">
      <div className="w-1/4">
        {toasts &&
          toasts.map((toast: any) => (
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