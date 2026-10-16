import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBaarCOM from "./Components/NavBaar";
import Home from "./Screens/Home";
import ABOUT from "./Screens/ABOUTS/about";
import Service from "./Screens/Services/Service";
import Project from "./Screens/PROJECTS/Project";
import BLOG from "./Screens/BLOGS/blog";
import Conacts from "./Screens/CONTACT/Contac";
import Footer from "./Sections/FOOTERS/Footers";

function App() {
  return (
    <>
      <NavBaarCOM />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/servie" element={<Service />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<BLOG />} />
          <Route path="/contact" element={<Conacts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
