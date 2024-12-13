import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const CategoriesNav = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link to="/posts" className="bg-blue-500 text-white rounded-full px-4 py-2">Tous les articles</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Journal de bord</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Ressources</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Développement personnel</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Découvertes</Link>
        <Link to="/posts?cat=apprentissage" className="hover:bg-blue-500 hover:text-white rounded-full px-4 py-2">Loisirs</Link>
      </div>
      <span className="text-xl font-md">|</span>
      <Search />
    </div>
  );
};

export default CategoriesNav;
