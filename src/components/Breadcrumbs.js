const Breadcrumbs = ({ pageName }) => (
  <div
    className="breadcrumbs d-flex align-items-center"
    style={{ backgroundImage: `url('assets/img/breadcrumbs-bg.jpg')` }}
  >
    <div
      className="container position-relative d-flex flex-column align-items-center"
      data-aos="fade"
    >
      <h2>{pageName}</h2>
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        <li>{pageName}</li>
      </ol>
    </div>
  </div>
);

export default Breadcrumbs;
