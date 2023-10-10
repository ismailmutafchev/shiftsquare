import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  const logoutHandler = () => {
    logout();
  }

  return (
    <div
    className="text-black hover:bg-opacity-75
    rounded-md py-2 text-sm font-regular"
    >
      {isAuthenticated && <button onClick={logoutHandler}>Log out</button>}
    </div>
  );
}
