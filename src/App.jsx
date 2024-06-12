import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import People from "./Components/People";
import Product from "./Components/Product";
import Innovation from "./Components/Innovation";
// import Product from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/product" element={<Product />} />
          <Route path="innovation" element={<Innovation />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
