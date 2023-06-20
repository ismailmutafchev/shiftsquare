import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        <button>
            {
                !isAuthenticated && (
                    <button onClick={() => loginWithRedirect()}>
                        Log in
                    </button>
                )}
        </button>
    )
}