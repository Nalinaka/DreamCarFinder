import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import React from "react";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import ContactForm from "./pages/ContactForm";

// Below code will show you how to get dynamic routing, e.g. 1, 2, 3 id's etc.
// const App = () => {
function App() {
  console.log("app")
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":id" element={<Cars />}></Route>
          <Route path=":/" element={<Main />}></Route>
          <Route path=":/" element={<Footer />}></Route>
          <Route path=":/" element={<ContactForm />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


