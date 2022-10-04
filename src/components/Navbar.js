const Navbar = ({ activeClass }) => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
          {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
          <h1>
            The Planer<span>.</span>
          </h1>
        </a>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            {activeClass && activeClass === "home" ? (
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
            ) : (
              <li>
                <a href="/">Home</a>
              </li>
            )}
            {activeClass && activeClass === "about" ? (
              <li>
                <a href="/aboutpage" className="active">
                  About
                </a>
              </li>
            ) : (
              <li>
                <a href="/aboutpage">About</a>
              </li>
            )}
            {activeClass && activeClass === "services" ? (
              <li>
                <a href="/servicespage" className="active">
                  Services
                </a>
              </li>
            ) : (
              <li>
                <a href="/servicespage">Services</a>
              </li>
            )}
            {activeClass && activeClass === "projects" ? (
              <li>
                <a href="/projectspage" className="active">
                  Project
                </a>
              </li>
            ) : (
              <li>
                <a href="/projectspage">Project</a>
              </li>
            )}
            {activeClass && activeClass === "blogs" ? (
              <li>
                <a href="/blogspage" className="active">
                  Blog
                </a>
              </li>
            ) : (
              <li>
                <a href="/blogspage">Blog</a>
              </li>
            )}
            {activeClass && activeClass === "contact" ? (
              <li>
                <a href="/contactpage" className="active">
                  Contact
                </a>
              </li>
            ) : (
              <li>
                <a href="/contactpage">Contact</a>
              </li>
            )}
          </ul>
        </nav>
        {/* <!-- .navbar --> */}
      </div>
    </header>
  );
};

export default Navbar;
