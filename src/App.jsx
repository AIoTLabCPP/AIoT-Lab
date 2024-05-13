import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Outcomes from "./pages/Outcomes";
import News from "./pages/News";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
