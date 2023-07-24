import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage.js";
import Navbar from "../../components/Navbar/Navbar";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // If a token is available in local storage, consider the user to be signed in
    if (token) {
      setUser({ loggedIn: true });
    }
  }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
