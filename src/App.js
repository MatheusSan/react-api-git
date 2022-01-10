import React from "react";

import GlobalStyles from "./GlobalStyle";
import { AuthProvider } from "./Context/AuthUser";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
}

export default App;
