import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  function renderLogout() {
    if (isAuthenticated) {
      return (<div class="flex items-center space-x-6 rtl:space-x-reverse">
      <LogoutButton />
      </div>);
    }
  }
  function renderLogin() {
    if (!isAuthenticated) {
      return (<div class="flex items-center space-x-6 rtl:space-x-reverse">
      <LoginButton />
      </div>);
    }
  }
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-black">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://iili.io/2A5jOT7.png"
              class="h-20"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              SleePyCat
            </span>
          </a>
            {renderLogin()}
            {renderLogout()}
        </div>
      </nav>
      <nav class="bg-white dark:bg-black">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  About 
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
