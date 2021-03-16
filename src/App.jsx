import React from "react";

import Routes from "./router";
import Footer from "./components/footer";
import "./index.scss";

const App = () => (
  <>
    <div className="app">
      <Routes />
    </div>
    <Footer />
  </>
);

export default App;
