import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setAuthenticated(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getUser();
  }, []);

  return (
    <Context.Provider
      value={{
        authenticated,
        setAuthenticated,
        user,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
