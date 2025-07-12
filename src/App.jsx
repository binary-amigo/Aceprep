import Main from "./components/Main";
import AIInput from "./components/AIMock/AIInput";
import Practice from "./components/Practice/Practice";
import Resource from "./components/Resources";
import SignUp from "./components/SignUp";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mock from "./components/Mock.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/ats" element={<AIInput />} />
      </Routes>
    </Router>
  );
}

export default App;
