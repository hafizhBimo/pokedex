import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<PokemonDetailPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
