import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>

    // <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
    //   Log Out
    // </button>
  );
};

export default LogoutButton;