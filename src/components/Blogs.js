import Image from "next/image";

const blogs =()=>(
      <div>
         <section className="blogs" id="blogs">
         <h1 className="heading"> our blogs </h1>
         <div className="swiper blogs-slider">
         <div className="swiper-wrapper">
            <div className="swiper-slide slide">
               <div className="image">
                  <Image src="/images/blog-1.jpg" width={100} height={100} alt="" />
               </div>
               <div className="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" className="btn">read more</a>
               </div>
            </div>
   
            <div className="swiper-slide slide">
               <div className="image">
                  <Image src="/images/blog-2.jpg" width={100} height={100} alt="" />
               </div>
               <div className="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" className="btn">read more</a>
               </div>
            </div>
   
            <div className="swiper-slide slide">
               <div className="image">
                  <Image src="/images/blog-3.jpg" width={100} height={100} alt="" />
               </div>
               <div className="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" className="btn">read more</a>
               </div>
            </div>
   
            <div className="swiper-slide slide">
               <div className="image">
                  <Image src="/images/blog-4.jpg" width={100} height={100} alt="" />
               </div>
               <div className="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" className="btn">read more</a>
               </div>
            </div>
   
            <div className="swiper-slide slide">
               <div className="image">
                  <Image src="/images/blog-5.jpg" width={100} height={100} alt="" />
               </div>
               <div className="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" className="btn">read more</a>
               </div>
            </div>
            
            <div className="swiper-slide slide">
               <div className="image">
                  <Image src="/images/blog-6.jpg" width={100} height={100} alt="" />
               </div>
               <div className="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" className="btn">read more</a>
               </div>
            </div>
   
         </div>
   
      </div>
   
   </section>
   </div>
)
export default blogs;