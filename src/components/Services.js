import Image from "next/image";

const services = ()=>(
    <div> <section class="services" id="services">

    <h1 class="heading"> our services </h1>
 
    <div class="box-container">
 
       <div class="box">
          <Image src="/images/service-1.png" width={100} height={100} alt=""   />
          <h3>building construction</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-2.png" width={100} height={100} alt="" />
          <h3>house renovation</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-3.png" width={100} height={100} alt="" />
          <h3>architechture design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-4.png" width={100} height={100} alt="" />
          <h3>material supply</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-5.png" width={100} height={100} alt="" />
          <h3>construction consultant</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-6.png" width={100} height={100} alt="" />
          <h3>interior design</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-7.png" width={100} height={100} alt="" />
          <h3>building maintenance</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
 
       <div class="box">
          <Image src="/images/service-8.png" width={100} height={100} alt="" />
          <h3>building renovation</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, necessitatibus.</p>
       </div>
       
    </div>
 
 </section>
 </div>
)
export default services;