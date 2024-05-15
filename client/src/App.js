import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home-Page";
import Login from "./Pages/Login-Page";
import SignUp from "./Pages/SignUp-Page";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
