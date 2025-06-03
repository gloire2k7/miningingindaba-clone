import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ExhibitOrSponsorWhy from "./pages/exhibit-or-sponsor-why";
import ExhibitorBrochure2026 from "./pages/exhibitor-brochure-2026";
//import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ExhibitOrSponsorWhy />} />
          <Route
            path="/exhibit-sponsor/why"
            element={<ExhibitOrSponsorWhy />}
          />
          <Route
            path="/exhibit-sponsor/2026-exhibitor-brochure"
            element={<ExhibitorBrochure2026 />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
