import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PricingAndTerms } from "./screens/PricingAndTerms";
import { Product } from "./screens/Product";
import { Stores } from "./screens/Stores";
import { Home } from "./screens/Home";
import { AboutUs } from "./screens/AboutUs";
import { AdminDashboard } from './screens/admin/AdminDashboard';
import { AuthProvider } from './contexts/AuthContext';
import { Hero } from "./screens/Hero";

function App() {
  return (
    <AuthProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/pricing" element={<PricingAndTerms />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
