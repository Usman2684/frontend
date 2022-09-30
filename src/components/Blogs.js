import Image from "next/image";

const blogs =()=>(
      <div>
         <section class="blogs" id="blogs">
         <h1 class="heading"> our blogs </h1>
         <div class="swiper blogs-slider">
         <div class="swiper-wrapper">
            <div class="swiper-slide slide">
               <div class="image">
                  <Image src="/images/blog-1.jpg" width={100} height={100} alt="" />
               </div>
               <div class="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" class="btn">read more</a>
               </div>
            </div>
   
            <div class="swiper-slide slide">
               <div class="image">
                  <Image src="/images/blog-2.jpg" width={100} height={100} alt="" />
               </div>
               <div class="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" class="btn">read more</a>
               </div>
            </div>
   
            <div class="swiper-slide slide">
               <div class="image">
                  <Image src="/images/blog-3.jpg" width={100} height={100} alt="" />
               </div>
               <div class="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" class="btn">read more</a>
               </div>
            </div>
   
            <div class="swiper-slide slide">
               <div class="image">
                  <Image src="/images/blog-4.jpg" width={100} height={100} alt="" />
               </div>
               <div class="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" class="btn">read more</a>
               </div>
            </div>
   
            <div class="swiper-slide slide">
               <div class="image">
                  <Image src="/images/blog-5.jpg" width={100} height={100} alt="" />
               </div>
               <div class="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" class="btn">read more</a>
               </div>
            </div>
            
            <div class="swiper-slide slide">
               <div class="image">
                  <Image src="/images/blog-6.jpg" width={100} height={100} alt="" />
               </div>
               <div class="content">
                  <h3>blog title goes here</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, nobis!</p>
                  <a href="#" class="btn">read more</a>
               </div>
            </div>
   
         </div>
   
      </div>
   
   </section>
   </div>
)
export default blogs;