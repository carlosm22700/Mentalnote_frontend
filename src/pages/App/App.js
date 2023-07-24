import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Add your API call here to fetch the authenticated user if exists
    // Upon getting the user set it in state.
  }, []);

  return (
    <main className="App">
      {user ? (
        <>{/* Add your Route components here */}</>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
