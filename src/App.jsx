import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import ServiceDetails from "./components/ServiceDetails";
import Services from "./components/Services";
import ProjectDetails from "./components/ProjectDetails";
import Projects from "./components/Projects";
import Facility from "./components/Facility";
import Product from "./components/Product";
import Courses from "./components/Courses";
import Studio from "./components/Studio";
import Footer from "./components/Footer";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } else {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const RECAPTCHA_SITE_KEY = "6Lc0l4QsAAAAABZggTCecLLfOge4ylQp-HGAGjlj";

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="bg-background min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/contact" 
            element={
              <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
                <Contact />
              </GoogleReCaptchaProvider>
            } 
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/product" element={<Product />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
