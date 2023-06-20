import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {

    const { logout, isAuthenticated } = useAuth0();

    return (
        <button>
            {isAuthenticated && (
                <button onClick={() => logout()}>
                    Log out
                </button>
            )}
        </button>
    )
}