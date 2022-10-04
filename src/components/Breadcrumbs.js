const Breadcrumbs = () => (
  <div
    className="breadcrumbs d-flex align-items-center"
    style={{ backgroundImage: `url('assets/img/breadcrumbs-bg.jpg')` }}
  >
    <div
      className="container position-relative d-flex flex-column align-items-center"
      data-aos="fade"
    >
      <h2>About</h2>
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        <li>About</li>
      </ol>
    </div>
  </div>
);

export default Breadcrumbs;
