import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FourZeroFour from "./Pages/404";
import AboutUs from "./Pages/AboutUs";
import Checkout from "./Pages/Checkout";
import Navbar from "./Pages/Components/Navbar";
import ContactUs from "./Pages/ContactUs";
import FAQ from "./Pages/FAQ";

import Home from "./Pages/Home";
import Offer from "./Pages/Offer";
import Order from "./Pages/Order";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ProductDetails from "./Pages/ProductDetails";
import Search from "./Pages/Search";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Test from "./Pages/test";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product-details" element={<ProductDetails />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/offer" element={<Offer />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
