import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="font-bold text-2xl">
        {`<AshBorea/>`}
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-5/6 bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="#" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link to="#" onClick={() => setOpen(false)}>
            A Propos
          </Link>
          <Link to="#" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <SignedOut>
            <Link to="/inscription" onClick={() => setOpen(false)}>
              Inscription
            </Link>
            <Link to="/connexion" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Connexion
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <Link to="#" onClick={() => setOpen(false)}>
          Accueil
        </Link>
        <Link to="#" onClick={() => setOpen(false)}>
          A Propos
        </Link>
        <Link to="#" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <SignedOut>
          <Link to="/inscription" onClick={() => setOpen(false)}>
            Inscription
          </Link>
          <Link to="/connexion" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Connexion
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <Link to="/parametres">Paramètres</Link>
          <SignOutButton>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Deconnexion
            </button>
          </SignOutButton>
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
