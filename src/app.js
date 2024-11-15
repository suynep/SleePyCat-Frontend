import React from "react";
import Profile from "./profile";
import Navbar from "./navbar";
import Team from "./team";
import Home from "./home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <Team />
    </div>
  );
}

export default App;
