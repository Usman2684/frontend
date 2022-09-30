import Image from "next/image";

const projects = () => (
    <div>
        <section class="projects" id="projects">

            <h1 class="heading"> our projects </h1>

            <div class="box-container">

                <a href="images/project-1.jpg" class="box">
                    <div class="image">
                        <Image src="/images/project-1.jpg" width={100} height={100} alt="" />
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-2.jpg" class="box">
                    <div class="image">
                        <Image src="/images/project-2.jpg" width={100} height={100} alt="" />
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-3.jpg" class="box">
                    <div class="image">
                        <Image src="/images/project-3.jpg" width={100} height={100} alt="" />
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-4.jpg" class="box">
                    <div class="image">
                        <Image src="/images/project-4.jpg" width={100} height={100} alt="" />
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-5.jpg" class="box">
                    <div class="image">
                        <Image src="/images/project-5.jpg" width={100} height={100} alt="" />
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>

                <a href="images/project-6.jpg" class="box">
                    <div class="image">
                        <Image src="/images/project-6.jpg" width={100} height={100} alt="" />
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>dream home</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </a>

            </div>

        </section>
    </div>
)
export default projects;