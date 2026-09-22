import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Razze from "./pages/World/Razze";
import Class from "./pages/World/Class";
import Age from "./pages/World/Age";
import Region from "./pages/World/Regions";
import BirthSign from "./pages/World/BirthSign";
import DaedricPrince from "./pages/World/DaedricPrince";
import LoreQuest from "./pages/Quest/LoreQuest";
import Working from "./pages/Working";
import DarkQuest from "./pages/Quest/DarkQuest.jsx";
import Admin from "./pages/Admin.jsx";
import Books from "./pages/World/Books.jsx";


function App() {

  
  return (
    <>
      <Header />

      <main className="flex-1 pb-10 sm:pb-16">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/races" element={<Razze />} />
          <Route path="/classes" element={<Class />} />
          <Route path="/ages" element={<Age />} />
          <Route path="/regions" element={<Region />} />
          <Route path="/birthsigns" element={<BirthSign />} />
          <Route path="/daedricprince" element={<DaedricPrince />} />
          <Route path="/lorequest" element={<LoreQuest />} />
          <Route path="/darkquest" element={<DarkQuest />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<Working />} />

        </Routes>
      </main>

      <footer className="title-bar page-x py-4 text-center font-display text-fluid-sm text-parchment-200">
        Oblivion Retro Forum — The Elder Scrolls IV
      </footer>
    </>
  );
}

export default App;
