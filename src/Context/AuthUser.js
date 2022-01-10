import React, { createContext, useEffect, useReducer, useState } from "react";

import { initialState, reducer } from "../store/reducer";

const Context = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleLogin(email, senha, time) {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, senha: senha, time: time })
    );
    setUser({ email: email, senha: senha });
    setAuthenticated(true);
  }

  async function removeLocalStorage() {
    localStorage.removeItem("user");
    return true;
  }

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(localStorage.getItem("user"));
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div />;
  }

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        loading,
        user,
        removeLocalStorage,
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
