import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] md:pb-3">
      <SignUp logInUrl="/login" />
    </div>
  );
};

export default Register;
