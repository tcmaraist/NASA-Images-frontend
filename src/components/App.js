import React from "react";

import NotFound from "./NotFound";

import Main from "./Main";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
