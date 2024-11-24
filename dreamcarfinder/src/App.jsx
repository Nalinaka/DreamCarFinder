import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import Cars from "./pages/Cars";
import ContactForm from "./pages/ContactForm";

// Below code will show you how to get dynamic routing, e.g. 1, 2, 3 id's etc.
// const App = () => {
function App() {
  console.log("app")
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;


