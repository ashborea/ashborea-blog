import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <a href="" className="font-bold">{`<AshBorea/>`}</a>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          {/* {open ? "X" : "☰"} */}
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
          <a href="#" onClick={() => setOpen(false)}>
            Accueil
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            A Propos
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Contact
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            Inscription
          </a>
          <a href="#" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Connexion
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="#" onClick={() => setOpen(false)}>
          Accueil
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          A Propos
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          Contact
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          Inscription
        </a>
        <a href="#" onClick={() => setOpen(false)}>
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Connexion
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;