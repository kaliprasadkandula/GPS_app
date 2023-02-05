//pages
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Dashboard from "./pages/dashboard";
import SubDashboard from "./pages/SubDashboard";

//styled component
import { StyledContainer } from "./components/Styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <StyledContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:DeviceId" element={<SubDashboard />} />
        </Routes>
      </Router>
    </StyledContainer>
  );
}

export default App;
