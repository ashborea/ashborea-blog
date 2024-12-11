import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] pt-1">
      <SignIn signUpUrl="/inscription" />
    </div>
  );
};

export default Login;
