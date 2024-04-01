
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import KnowHow from "./pages/KnowHow";
import Developer from "./pages/Developer";
import ContactUs from "./pages/ContactUs";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/workflow" element={<KnowHow />} />
          <Route path="/developers" element={<Developer />} />
          <Route path="/contactus" element={<ContactUs />} />


        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
