import Image from "next/image";

const projects = () => (
    <div>
        <section className="projects" id="projects">

            <h1 className="heading"> our projects </h1>

            <div className="box-container">

                <a href="images/project-1.jpg" className="box">
                    <div className="image">
                        <Image src="/images/project-1.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i className="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-2.jpg" className="box">
                    <div className="image">
                        <Image src="/images/project-2.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i className="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-3.jpg" className="box">
                    <div className="image">
                        <Image src="/images/project-3.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i className="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-4.jpg" className="box">
                    <div className="image">
                        <Image src="/images/project-4.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i className="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-5.jpg" className="box">
                    <div className="image">
                        <Image src="/images/project-5.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i className="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-6.jpg" className="box">
                    <div className="image">
                        <Image src="/images/project-6.jpg" width={100} height={100} alt="" />
                    </div>
                    <div className="content">
                        <div className="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i className="fas fa-plus"></i>
                    </div>
                </a>

            </div>

        </section>
    </div>
)
export default projects;