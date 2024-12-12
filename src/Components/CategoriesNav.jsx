import React from "react";
import { Link } from "react-router-dom";

const CategoriesNav = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="/posts" className="bg-blue-500 text-white rounded-full px-4 py-2">Tous les articles</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Journal de bord</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Ressources</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Développement personnel</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Découvertes</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Chats</Link>
      </div>
      <span className="text-xl font-md">|</span>
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="gray">
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input type="text" placeholder="Recherche par article" />
      </div>
    </div>
  );
};

export default CategoriesNav;
