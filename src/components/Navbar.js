const Navbar = () => (
  <nav id="navbar" className="navbar">
    <ul>
      <li>
        <a href="index.html" className="active">
          Home
        </a>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="services.html">Services</a>
      </li>
      <li>
        <a href="projects.html">Projects</a>
      </li>
      <li>
        <a href="blog.html">Blog</a>
      </li>
      <li className="dropdown">
        <a href="#">
          <span>Dropdown</span>{" "}
          <i className="bi bi-chevron-down dropdown-indicator"></i>
        </a>
        <ul>
          <li>
            <a href="#">Dropdown 1</a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>Deep Dropdown</span>{" "}
              <i className="bi bi-chevron-down dropdown-indicator"></i>
            </a>
            <ul>
              <li>
                <a href="#">Deep Dropdown 1</a>
              </li>
              <li>
                <a href="#">Deep Dropdown 2</a>
              </li>
              <li>
                <a href="#">Deep Dropdown 3</a>
              </li>
              <li>
                <a href="#">Deep Dropdown 4</a>
              </li>
              <li>
                <a href="#">Deep Dropdown 5</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Dropdown 2</a>
          </li>
          <li>
            <a href="#">Dropdown 3</a>
          </li>
          <li>
            <a href="#">Dropdown 4</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
