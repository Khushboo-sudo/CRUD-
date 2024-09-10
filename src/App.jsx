import React from "react";
import Create from "./Component/Create";
import AllUsers from "./Component/AllUsers";
import Update from "./Component/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllUsers />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
