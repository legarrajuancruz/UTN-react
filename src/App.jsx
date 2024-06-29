import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Section from "./components/section/section";
import Menu from "./components/menu/menu";
import FormularioPociones from "./components/pociones/formularioPociones";
import GestionPociones from "./components/pociones/gestionPociones";

import ListaCasas from "./components/casas/listaCasas";

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Section />}></Route>
            <Route path="/casas" element={<ListaCasas />}></Route>
            <Route path="/pociones" element={<GestionPociones />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
