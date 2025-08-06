import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PricingAndTerms } from "./screens/PricingAndTerms";
import { Product } from "./screens/Product";
import { Stores } from "./screens/Stores";
import { Home } from "./screens/Home";
import { AdminDashboard } from './screens/admin/AdminDashboard';

// Add these imports
import { AuthProvider } from './contexts/AuthContext';

// Wrap your app with AuthProvider
function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Your existing routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/pricing" element={<PricingAndTerms />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
