import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trademark from "./pages/Services/trademark";
import CompanyRegistration from "./pages/Services/company-registration";
import GST from "./pages/Services/gst";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
	<Route path="/login" element={<Login />} />
	<Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/services/trademark" element={<Trademark />} />
        <Route path="/services/company-registration" element={<CompanyRegistration />} />
        <Route path="/services/gst" element={<GST />} />
      </Routes>
    </Router>
  );
}

export default App;
