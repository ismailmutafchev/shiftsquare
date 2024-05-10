import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  className?: string | undefined;
}

export default function LogoutButton({ className }: Props) {
  const { logout, isAuthenticated } = useAuth0();

  const logoutHandler = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className={className}>
      {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
    </div>
  );
}
