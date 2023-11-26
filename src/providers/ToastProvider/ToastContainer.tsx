import Toast from "../../components/Toast";
import { useToastDispatchContext } from "./ToastContext";
 
export default function ToastContainer() {
  const { toasts } = useToastDispatchContext();


  console.log(toasts,'sdfsdf')
  return (
    <div className="absolute bottom-10 w-full z-50 left-1/4">
      <div className="max-w-xl mx-auto">
        {toasts &&
          toasts.map((toast: any) => (
            <Toast
              id={toast.id}
              key={toast.id}
              type={toast.type}
              message={toast.message}
            />
          ))}
          {/* <Toast
              id={'fsdfsdf'}
              // key={toast.id}
              type={'success'}
              message={"toast.message"}
            /> */}
      </div>
    </div>
  );
}