import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import MembershipsPage from "./pages/MembershipsPage";
import OfferingsPage from "./pages/OfferingsPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const frameId = window.requestAnimationFrame(scrollToTarget);

    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<SiteLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/offerings" element={<OfferingsPage />} />
            <Route path="/memberships" element={<MembershipsPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return <AppRoutes />;
}
