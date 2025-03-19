import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AppLayout from "./Pages/AppLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
