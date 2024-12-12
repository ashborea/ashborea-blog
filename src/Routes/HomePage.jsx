import React from "react";
import { Link } from "react-router-dom";
import CategoriesNav from "../Components/CategoriesNav";
import Popular from "../Components/Popular";
import PostList from "../Components/PostList";

const HomePage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMBS */}
      <div className="flex gap-4">
        <Link to="/">Accueil</Link>
        <span className="">·</span>
        <span className="text-blue-500">Blog</span>
      </div>

      {/* TITLE & DESCRIPTION */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-800 font-bold text-2xl md:text-5xl lg:text-6xl">
            Journal d'une vendeuse en reconversion
          </h1>
          <p className="mt-3 text-md md:text-xl">
            Pour vendre des sites au lieu de vendre du pain
          </p>
        </div>
      </div>

      <CategoriesNav />
      <Popular />

      <div className="">
        <h2 className="my-8 text-2xl text-gray-600">Derniers articles</h2>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
