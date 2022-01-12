import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Context } from "./Context/AuthUser";
import Login from "./pages/login";
import Logged from "./pages/logged";

function RequireAuth({ children }) {
  const { authenticated, loading } = useContext(Context);

  if (!authenticated && !loading) {
    return <Navigate to="/" />;
  }
  return children;
}

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/logged"
          element={
            <RequireAuth>
              <Logged />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
