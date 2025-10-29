import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect /experiences -> / */}
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Home />} />

        <Route path="/details/:id" element={<Details />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/result" element={<Result />} />

        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
