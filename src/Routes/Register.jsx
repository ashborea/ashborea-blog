import React from "react";
import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)] pt-1">
      <SignUp
        signInUrl="/connexion"
        appearance={{
          elements: {
            rootBox: "h-[610px]",
            cardBox: "h-[610px]",
            card: "-m-2",
          },
        }}
      />
    </div>
  );
};

export default Register;
