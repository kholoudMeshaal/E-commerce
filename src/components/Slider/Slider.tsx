
"use client"
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';


export default function Slider({imageList , spaceBetween= 100 , slidesPerView=1 , autoPlay= false }: {imageList: string[] ,spaceBetween?: number , slidesPerView?: number , autoPlay?:boolean| {
         delay: number , 
        disableOnInteraction: boolean,} 
      }) {
  return (
<>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y , Autoplay , EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={autoPlay}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
  coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        effect={'coverflow'}
  
   className="mySwiper  shadow-lg"
     pagination={{ clickable: true }}
     
  >
{imageList.map(e=> <SwiperSlide key={e}> 
   
    <div  className="w-full h-64 object-cover " >
        <img src={e} alt={e}  style={{ width: '100%', height: '300px', objectFit: 'cover' ,  }} />
  <div      style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.9))',
              }}>
                <div className='p-8'>
                 <h2 className="text-2xl  text-white md:text-5xl font-bold leading-tight">
                Fresh Product Delivered 
                </h2>
                <p className='text-2xl  text-white md:text-5xl font-bold leading-tight pb-5'>To your Home</p>
                
           
                
<Link 
                      href="/Shop" 
                      className="bg-white text-green-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                    >
                      Shop Now
                    </Link>
    </div>
    </div>
    
       </div>
</SwiperSlide> )}

    </Swiper>
    <style jsx global>{`
    .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
           
          width: 25px !important;
          border-radius: 5px !important;
        }
      `}</style>
      </>
    
  )
}

