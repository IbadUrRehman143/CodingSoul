import React from 'react';
import logo from "../../assets/Coding-souls-Logo-01.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="tw-bg-white">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
              <Link className="navbar-brand tw-flex-1" to="#">
                <img src={logo} className="tw-w-36 tw-h-auto" alt="Coding Souls Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 md:tw-gap-5 tw-w-full tw-flex tw-flex-col lg:tw-flex-row tw-items-start lg:tw-justify-end">
                <li className="nav-item tw-text-nowrap">
                  <Link className="nav-link active tw-text-FMd hover:tw-underline hover:tw-text-CustomCyan" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item tw-text-nowrap dropdown">
                  <a
                    className="nav-link dropdown-toggle active tw-text-FMd hover:tw-underline hover:tw-text-CustomCyan"
                    to="/service"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="tw-border-t-8 tw-border-t-GlobalColord4b0483 tw-w-64 dropdown-menu">
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/website">Website Design</Link></li>
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/custom">Custom Website</Link></li>
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/appd">App Development</Link></li>
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/customcoding">Custom Coding</Link></li>
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/digitalmark">Digital Marketing</Link></li>
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/trending">Trending Solutions</Link></li>
                    <li><Link className="dropdown-item hover:tw-underline hover:tw-text-CustomCyan" to="/hosting">Web Hosting</Link></li>
                  </ul>
                </li>
                <li className="nav-item tw-text-nowrap">
                  <Link className="nav-link active tw-text-FMd hover:tw-underline hover:tw-text-CustomCyan" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item tw-text-nowrap">
                  <Link className="nav-link active tw-text-FMd hover:tw-underline hover:tw-text-CustomCyan" to="/blogc">
                    Blog
                  </Link>
                </li>
                <li className="nav-item tw-text-nowrap">
                  <Link className="nav-link active tw-text-FMd hover:tw-underline hover:tw-text-CustomCyan" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item tw-text-nowrap">
                  <Link className="nav-link active tw-text-FMd hover:tw-underline hover:tw-text-CustomCyan" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* Search Form (visible on larger screens) */}
              <form className="d-none d-lg-flex tw-w-auto" role="search">
                <input
                  className="form-control me-2 tw-w-full lg:tw-w-80"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Link className="btn btn-outline-success tw-w-full lg:tw-w-32" to="#">
                  Search
                </Link>
              </form>
            </div>
          </div>
        </nav>
        {/* Search Form (inside dropdown for smaller screens) */}
        <div className="d-lg-none tw-p-3 tw-bg-white">
          <form className="tw-w-full" role="search">
            <input
              className="form-control me-2 tw-w-full"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link className="btn btn-outline-success tw-w-full mt-2" to="#">
              Search
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
