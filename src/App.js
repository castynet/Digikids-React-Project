import React from "react";
import "./styles.css";

import Apod from "./components/apod";
import Asteroids from "./components/asteroids";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="App">
      <Apod />
      <Asteroids />
      <Footer />
    </div>
  );
}
