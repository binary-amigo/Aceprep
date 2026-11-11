import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Mock from "./pages/Mock";
import Ats from "./pages/Ats";
import Practice from "./pages/Practice";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mock" element={<Mock />} />
          <Route path="/ats" element={<Ats />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}
