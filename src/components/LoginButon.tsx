import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export default function LoginButton() {
  const [scaleBottomBorder, setScaleBottomBorder] = useState<boolean>(false);

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loginHandler = () => {
    loginWithRedirect();
  };

  const bottomBorderOff = () => {
    setScaleBottomBorder(false);
  };

  const bottomBorderOn = () => {
    setScaleBottomBorder(true);
  };

  return (
    <div
      onMouseOut={bottomBorderOn}
      onMouseLeave={bottomBorderOff}
      className="text-steel-blue-900
        rounded-md py-2 px-3 font-medium relative text-sm"
    >
      {!isAuthenticated && (
        // <button className={`${scaleBottomBorder ? "bg-clip-text text-transparent bg-gradient-to-r from-[#ff80b5] to-[#9089fc] relative " : ""} duration-500 text-base`} onClick={loginHandler}>
        <button
          className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff80b5] hover:to-[#9089fc] hover:relative hover:duration-500"
          onClick={loginHandler}
        >
          Log in
        </button>
      )}
      <div
        className={`bg-green-400 absolute h-1 left-0 ${
          scaleBottomBorder ? `w-full bottom-1 rounded-b-md ` : "w-0"
        }  duration-300`}
      ></div>
    </div>
  );
}
