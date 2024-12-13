import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Routes/HomePage.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import SingleArticle from "./Routes/SingleArticle.jsx";
import Register from "./Routes/Register.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { frFR } from "@clerk/localizations";
import Login from "./Routes/Login.jsx";
import WriteArticle from "./Routes/WriteArticle.jsx";
import ArticlePage from "./Routes/ArticlePage.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      localization={frFR}
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/:slug" element={<SingleArticle />} />
            <Route path="/write-article" element={<WriteArticle />} />
            <Route path="/article" element={<ArticlePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
