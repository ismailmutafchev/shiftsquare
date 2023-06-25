import { useAuth0 } from "@auth0/auth0-react";

export default function Login () {
    const { loginWithRedirect } = useAuth0();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => loginWithRedirect({
                screen_hint: 'signup',
            })}>Login</button>
        </div>
    )
}