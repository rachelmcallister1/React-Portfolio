import React from "react";

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Rachel M
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              onClick={() => setCurrentPage("About")}
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a
              onClick={() => setCurrentPage("Contact")}
              className="nav-link"
              href="#"
            >
              Contact
            </a>
            <a
              onClick={() => setCurrentPage("Portfolio")}
              className="nav-link"
              href="#"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;