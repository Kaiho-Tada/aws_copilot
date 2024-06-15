import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./routes/CreateBlog.tsx";
import Blogs from "./routes/Blogs.tsx";
import Blog from "./routes/Blog.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="create" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
