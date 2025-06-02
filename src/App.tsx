import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ExhibitOrSponsorWhy from "./pages/exhibit-or-sponsor-why";
//import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ExhibitOrSponsorWhy />} />
          <Route path="/exhibit-sponsor/why" element={<ExhibitOrSponsorWhy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
