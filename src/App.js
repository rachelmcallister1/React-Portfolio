import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import ContactInfo from "./pages/ContactInfo";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  function renderPage() {
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <ContactInfo />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  }
  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;