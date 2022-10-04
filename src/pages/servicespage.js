import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const ServicePage = () => {
  const [active, setActive] = useState("services");
  return (
    <>
      <Navbar activeClass={active} />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <Breadcrumbs pageName="Services" />
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-mountain-city"></i>
                  </div>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-compass-drafting"></i>
                  </div>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-trowel-bricks"></i>
                  </div>
                  <h3>Asperiores Commodit</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-helmet-safety"></i>
                  </div>
                  <h3>Velit Doloremque</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                  </div>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a
                    href="service-details.html"
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <!-- End Service Item --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Servie Cards Section ======= --> */}
        <section id="services-cards" className="services-cards">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <h3>Quasi eaque omnis</h3>
                <p>
                  Eius non minus autem soluta ut ui labore omnis quisquam
                  corrupti autem odit voluptas quos commodi magnam occaecati.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Ullamco laboris nisi ut aliquip ex ea</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <h3>Et nemo dolores consectetur</h3>
                <p>
                  Ducimus ea quam et occaecati est. Temporibus in soluta labore
                  voluptates aut. Et sit soluta non repellat sed quia dire
                  plovers tradoria
                </p>

                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Enim temporibus maiores eligendi</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Ut maxime ut quibusdam quam qui</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Officiis aspernatur in officiis</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <h3>Staque laboriosam modi</h3>
                <p>
                  Velit eos error et dolor omnis voluptates nobis tenetur sed
                  enim nihil vero qui suscipit ipsum at magni. Ipsa architecto
                  consequatur aliquam
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Quis voluptates laboriosam numquam</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Treva libero sunt quis veniam ut</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Debitis eos est est corrupti</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}

              <div
                className="col-lg-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <h3>Dignissimos suscipit iste</h3>
                <p>
                  Molestiae occaecati assumenda quia saepe nobis recusandae at
                  dicta ducimus sequi numquam commodi est in consequatur ea
                  magnam quia itaque
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Veritatis qui reprehenderit quis</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Accusantium vel numquam sunt minus</span>
                  </li>
                  <li>
                    <i className="bi bi-check2"></i>{" "}
                    <span>Voluptatem pariatur est sationem</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End feature item--> */}
            </div>
          </div>
        </section>
        {/* <!-- End Servie Cards Section --> */}

        {/* <!-- ======= Alt Services Section 2 ======= --> */}
        <section id="alt-services-2" className="alt-services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>
                  Non quasi officia eum nobis et rerum epudiandae rem voluptatem
                </h3>
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint
                  at non. Ducimus maxime minima iste magni sit praesentium
                  assumenda minus. Amet rerum saepe tempora vero.
                </p>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}
              </div>

              <div
                className="col-lg-6 img-bg"
                style={{
                  backgroundImage: `url("/assets/img/alt-services-2.jpg");`,
                }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>
            </div>
          </div>
        </section>
        {/* <!-- End Alt Services Section 2 --> */}

        {/* <!-- ======= Alt Services Section ======= --> */}
        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{
                  backgroundImage: `url("/assets/img/alt-services.jpg");`,
                }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi
                </p>

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Alt Services Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <Testimonials />
        {/* <!-- End Testimonials Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
      {/* <!-- End Footer --> */}
    </>
  );
};

export default ServicePage;
