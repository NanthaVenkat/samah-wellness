import HomePage from "./pages/HomePage.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "../src/layouts/Header.jsx"
import Footer from "../src/layouts/Footer.jsx"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
