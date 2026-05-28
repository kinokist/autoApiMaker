import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneratePage from "./pages/GeneratePage";
import ProjectList from "./pages/ProjectList";
import DeployStatus from "./pages/DeployStatus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneratePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/deploy/:id" element={<DeployStatus />} />
      </Routes>
    </Router>
  );
}

export default App;