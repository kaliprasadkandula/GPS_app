//pages
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

//styled component
import { StyledContainer } from "./components/Styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
function App() {
  return (
    <StyledContainer>
      <Router>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Routes>
      </Router>
    </StyledContainer>
  );
}

export default App;
