import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import Header from "./components/Header";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.tsx";

// Component to scroll to top on route change (but not on browser back/forward)
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on normal navigation, not on browser back/forward
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="relative">
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:projectName" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
