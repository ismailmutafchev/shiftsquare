import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const loginHandler = () => {
        loginWithRedirect();
    }

    return (
        <div className="text-white hover:bg-polar-300 hover:bg-opacity-75
        rounded-md py-2 px-3 text-sm font-medium">
            {
                !isAuthenticated && (
                    <button onClick={loginHandler}>
                        Log in
                    </button>
                )}
        </div>
    )
}