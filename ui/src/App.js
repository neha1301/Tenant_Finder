import "./App.css";

import NavBar from "./Navbar/NavBar";
import Contact from "./Contact/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignInUp/SignIn";
import SignUp from "./SignInUp/SignUp";
import About from "./About/About";
import AddProperty from "./views/AddProperty";
import Otp from "./Otp";
import PropertyList from "./views/PropertyList";

import { useAuth } from "./context/authContext";

function App() {
  const { loggedIn, mobile, email, role } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/verify-number" element={<Otp />} />
        <Route path="/properties" element={<PropertyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
