import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";


function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profil" element={<Profile/>}/>
  </Routes>
  
  </BrowserRouter>
  
}

export default App