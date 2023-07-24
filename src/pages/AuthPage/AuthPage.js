import { useState } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage() {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const switchForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <main>
      {isSigningUp ? (
        <SignupForm switchForm={switchForm} />
      ) : (
        <LoginForm switchForm={switchForm} />
      )}
    </main>
  );
}
