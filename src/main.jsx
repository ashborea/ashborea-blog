import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Routes/HomePage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import SingleArticle from "./Routes/SingleArticle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="single-article" element={<SingleArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
