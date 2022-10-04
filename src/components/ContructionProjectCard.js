const ConstructionProjectCard = ({
    imageLink,
    title,
    description,
}) => (
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card-item">
            <div className="row">
              <div className="col-xl-5">
                <div
                  className="card-bg"
                  style={{
                    backgroundImage: `url("${imageLink}")`,
                  }}
                ></div>
              </div>
              <div className="col-xl-7 d-flex align-items-center">
                <div className="card-body">
                  <h4 className="card-title">{title}</h4>
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
);

export default ConstructionProjectCard;