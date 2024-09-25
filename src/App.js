import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './Pages/Home'
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/dashboard" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;