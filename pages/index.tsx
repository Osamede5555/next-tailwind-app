import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { HomeIcon, PhotoIcon, VideoCameraIcon, MicrophoneIcon, PencilIcon, DocumentTextIcon, FolderIcon } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-[#fdf6e3] text-gray-900"} min-h-screen`}>
      
      <nav className={`${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"} flex items-center justify-between px-8 py-4 shadow-md`}>
        
        <div className="flex items-center space-x-2">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEX///8AAABkZGT09PT39/fp6enw8PAtLS25ubnc3Nz7+/tISEjHx8fR0dGRkZEWFhZXV1eIiIhAQECXl5dqampfX1+/v79+fn6qqqp0dHRSUlIdHR2hoaFvb28zMzOwsLAODg4lJSV0FPEnAAADG0lEQVR4nO2a25KqMBBFiQgICALeABmU///JIQmMkDSjderMxodej41ldoVOpy84DsMwDMMwDMMwDMMwDMMwDKOJXNeNqAe9fYsWo0mOpyIovo6hYffLquiCOt/hJXnnh9AcTv7EHh1vg13Ee7CmvZhwe67u19MHzXqaepLB7sVzew7UFHaGqMDTD86GXVxwok7m2qJS9p1lL/wXf/Xf8K21hVChIbPtsDPYEKLK3p4cbHuGEvVFiLr29gthFyhRG2Jt6VT3TxRVfpoo+frSTxMlT5kdKVYWJe2UpsOKouR9klCiYCHBFhX7tFYh0vVEyZyK3Cjc5WeKKlSe11KaDsmrP/sbUY9cXbo5uVG1ixbV1psqL/WytCZgQiVFPbKd57nboW7wr7QmAXt7UtR1Vi7sgwVNsCjV55fBZAMi/xIvSIIm6blOfr1L2TS5lQFPaD2cKOVIyWbpna3h5ootmRGYwOKBwq1fK9IpMpDqHU0xtp9A5r0WZpPhjyGqFpsjVpNZtJNUWE3O0p0ypUY3qMhsbk4GK9ffF1UAQ/m7ok7YqKl45VNfazQ8w18l3e7yN26O3q3frmKdsEcZro4ZWA5UrdomvZfALp5iyasaferuqkOM6+INUDdy3eiMPRxPJzidciKzm3e7hsPGlE+PQ0YrdeL9dEzN201ejhlBtJvWpMj7byhl/DDpCUPvJyxF93krtgNmL2e6SkmOD2EADAu9I2f7+fhqm+QxlWVBRfUH/rgLPX94c5bfj+Bi1Xjku7Yo6lQfsQVVOFc3soRKySJbw7qbtoYoEaiXRMxABLDDYedTcunwRmjCzWZsUYEMSOSFCLtqiMxTOjSZZtUrilJtA0rUqs19mUd93MRBzmbIWLWmqMUpFvk1BVCUPUIG7hTlO6tPRqlOkAySIVHlnFCi3KUNWXPaTowXdDPKnhnhxiCOZw6HxmrKmsPjJg7W5duNZYtrnAFsKzaZ+nT7rA/8mSr4J1TpKKudVwe7n272Fd+kcrxLVXTF9WIu7SZpFrSbEtwcZhiGYRiGYRiGYRiGYRiGYRiGYf6Fb4MUHwzP/KRQAAAAAElFTkSuQmCC" alt="" style={{ width: 50, height: 50 }} />
          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-300"></div>
          <span>benevolentnimblebat</span>
        </div>

      
        
        <div className="flex items-center space-x-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-xl">
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <HomeIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <PhotoIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <VideoCameraIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <MicrophoneIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <PencilIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <DocumentTextIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
          <button className="p-2 bg-gray-200 dark:bg-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-500 transition">
            <FolderIcon className="w-4 h-4 text-black dark:text-white" />
          </button>
        </div>

        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
            Gallery
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
            Support
          </button>
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {darkMode ? "☀️" : "☀️"}
        </button>

          <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-300"></div>
        </div>
      </nav>

     
     
      <div className="w-[700px] mx-auto mt-20">
   <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={10}
    slidesPerView={2}   
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    pagination={{
      el: ".swiper-pagination",
      clickable: true,
    }}
    className="rounded-2xl"
  >
    {[
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShN6JuahRRv8sCCJlO66rlQILWiNzMmimNw&s",
        title: "WAN 2.2",
        desc: "Generate complex images with the powerful WAN 2.2 model.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZU4mj0GcknU-sLBxuc_PhByVP_rUIS_NwuQ&s",
        title: "FLUX.1 Krea",
        desc: "We’re making the weights to our FLUX.1 Krea model open-source.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Xy1Ge3OBsWLo8YNGHPre8wHD7yqb5s4wIg&s",
        title: "Realtime Render",
        desc: "Realtime AI rendering with instant feedback loops.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvAV2NyQ4so9Qrq0gzGMR39Bw0ja4fjRdwg&s",
        title: "Video Generator",
        desc: "Generate stunning AI-powered videos seamlessly.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ0vINZW3G9O31e2ju6E-dWcUIa28010C1iA&s",
        title: "Image Enhancer",
        desc: "Enhance and upscale images up to 4K with AI.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghI_DVV9UGu9ODss4gu8wyuyIQjb5EUDElQ&s",
        title: "AI Avatar",
        desc: "Create personalized avatars using AI.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghI_DVV9UGu9ODss4gu8wyuyIQjb5EUDElQ&s",
        title: "AI Avatar",
        desc: "Create personalized avatars using AI.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghI_DVV9UGu9ODss4gu8wyuyIQjb5EUDElQ&s",
        title: "AI Avatar",
        desc: "Create personalized avatars using AI.",
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghI_DVV9UGu9ODss4gu8wyuyIQjb5EUDElQ&s",
        title: "AI Avatar",
        desc: "Create personalized avatars using AI.",
      }
    ].map((item, index) => (
      <SwiperSlide key={index}>
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[200px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-2 flex flex-col justify-end rounded-xl">
            <h2 className="text-sm font-bold text-white">{item.title}</h2>
            <p className="text-white/80 text-xs">{item.desc}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  
  <div className="swiper-controls relative flex justify-center items-center mt-3">
    <div className="swiper-pagination"></div>
    <div className="swiper-arrows absolute right-0 flex gap-3">
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  </div>
</div>
      

<section className="px-8 py-12">
  <h3 className="text-xl font-bold mb-6">Generate</h3>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      {
        name: "Image",
        desc: "Generate images with custom styles in Flux and Ideogram.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s", 
      },
      {
        name: "Video",
        desc: "Generate videos with Haiku, Pika, Runway, Luma, and more.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Edit",
        desc: "Add objects, change styles, or expand photos and generations.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Video Lipsync",
        desc: "Lip sync any video to any audio.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Realtime",
        desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Enhancer",
        desc: "Upscale and enhance images and videos up to 2K.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Motion Transfer",
        desc: "Transfer motion to images and animate characters.",
        new: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
      {
        name: "Train",
        desc: "Teach Krea to replicate your style, products, or characters.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv8E-w1WlYTVzb4lQMx2iINDEkUWBc2ilrw&s",
      },
    ].map((feature) => (
      <div
        key={feature.name}
        className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition"
      >
       
        <div className="flex items-center space-x-3">
         
          <img
            src={feature.img}
            alt={feature.name}
            className="w-8 h-8 object-cover rounded-md"
          />

          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-gray-800 text-sm">
                {feature.name}
              </h4>
              {feature.new && (
                <span className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                  New
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{feature.desc}</p>
          </div>
        </div>

     
        <button className="ml-4 rounded-lg border border-gray-300 bg-white px-4 py-1 text-xs hover:bg-gray-100">
          Open
        </button>
      </div>
    ))}
  </div>
</section>

<footer className="bg-black text-white py-6 px-8 flex justify-between items-center">
       <div className="flex items-center gap-2 text-sm text-gray-400">
    
     <img src="data:image/png;base64,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" alt="" style={{ width: 30, height: 30 }}  className=""  />
     <span>Krea AI</span>
   </div>
        
  

   <div className="flex items-center gap-2 text-sm text-gray-400">
     <span>curated by</span>
   <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAAAD////MzMwVFRXT09Oenp5ubm7x8fE/Pz+VlZVWVla3t7eRkZH7+/vQ0NB+fn7BwcGHh4fm5uZJSUmnp6coKCjd3d0MDAxjY2NRUVEzMzN3d3etra1cXFxoaGgcHBwtQMAwAAABg0lEQVR4nO3ZUXPBQBiF4SWIikRQqaD8/3+pWpbOyLdremZr2ve9PhcPcbE2zhERERERERERERERERERka+t+93VS7/Liur+pprJTYdFzyif+GHRORqqTavGMt2g+t0jNeptYJquqO7vSY7KAiaPskxqVB0wXVAv5kiLCprOqJ09kqLMZ3KDmgZGSlTg83uU/ey0qGGE6YSaBUc6VJSply/n4ZEMFf78X6jQ70mJijTFJUJJTSLUunw+VCslaVCT/PlQY+2zk6A25qHud1Ar9bP7qNiPvrV91GQfNEU9Zsr0z+7nqIjDSnJU8PQLChQoUKBA/UNUJTiYqlF11Gm5se8hxKjGjSNM5dL+46xFDTYxqHwduImRoprMxaD2oeshJWpxujQPosrTtXkyVD52Mai5S4jKWxeDmrqUqHcXg3p1CVHl3sWgzqZEqNFlY6KKyyoJau43Fqr2KyVqd//tWHU1uU3na7aqOPjVtuM122eDh1BERERERERERERERERERH+pI/8pGWUpHWy2AAAAAElFTkSuQmCC"
      alt="Mobbin logo"
      className="w-8 h-8 rounded-full"
    />
    <span>Mobbin</span>
  </div>
</footer>

    </div>
  );
}
