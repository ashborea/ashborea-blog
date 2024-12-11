import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between z-10">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <span>{`<AshBorea/>`}</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          {/* {open ? "X" : "☰"} */}
          <div className="flex flex-col gap-[5.4px] pr-3">
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
          className={`z-20 w-full h-[80vh] bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Accueil
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            A Propos
          </Link>
          <Link to="/" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link to="/signup" onClick={() => setOpen(false)}>
            Inscription
          </Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Connexion
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/" onClick={() => setOpen(false)}>
          Accueil
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          A Propos
        </Link>
        <Link to="/" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link to="/signup" onClick={() => setOpen(false)}>
          Inscription
        </Link>
        <Link to="/login" onClick={() => setOpen(false)}>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Connexion
          </button>
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
