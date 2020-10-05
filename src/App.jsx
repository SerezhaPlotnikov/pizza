import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import { Header } from "./views/Header";

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Header />
        {/* <Main /> */}
        <Routes />
        {/* <Cart /> */}
        {/* <Empty /> */}
      </Router>
    </div>
  );
}
export default App;
