import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ExhibitOrSponsorWhy from "./pages/exhibit-or-sponsor-why";
import ExhibitorBrochure2026 from "./pages/exhibitor-brochure-2026";
import WhoAttended2025Sponsors from "./pages/who-attended-2025-sponsors";
import WhoAttended2025Exhibitors from "./pages/who-attended-2025-exhibitors";
import Testimonials from "./pages/Testimonials";
import Enquire from "./pages/Enquire";
import ClientZone from "./pages/ClientZone";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/exhibit-sponsor/why"
            element={<ExhibitOrSponsorWhy />}
          />
          <Route
            path="/exhibit-sponsor/2026-exhibitor-brochure"
            element={<ExhibitorBrochure2026 />}
          />
          <Route
            path="/exhibit-sponsor/who-attended-in-2025/sponsors"
            element={<WhoAttended2025Sponsors />}
          />
          <Route
            path="/exhibit-sponsor/who-attended-in-2025/exhibitors"
            element={<WhoAttended2025Exhibitors />}
          />
          <Route
            path="/exhibit-sponsor/testimonials"
            element={<Testimonials />}
          />
          <Route path="/exhibit-sponsor/enquire" element={<Enquire />} />
          <Route path="/exhibit-sponsor/client-zone" element={<ClientZone />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
