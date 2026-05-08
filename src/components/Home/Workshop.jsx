import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import BubbleButton from '../BubbleButton';
import indulgeImage1 from '/src/assets/images/home-1.png'
import indulgeImage2 from '/src/assets/images/Memberships.png'
import indulgeImage3 from '/src/assets/images/home-2.png'
import indulgeImage4 from '/src/assets/images/home-4.png'
import workshopImg1 from '/src/assets/images/home-1.png'
import workshopImg2 from '/src/assets/images/Memberships.png'
import workshopImg3 from '/src/assets/images/home-2.png'
import workshopImg4 from '/src/assets/images/home-4.png'

const workshopSlider = [
    { image: workshopImg1, type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
    { image: workshopImg3, type: 'Workshop', name: 'Event Name 2', tag: 'Tag Line', date: '16 Apr, 2026' },
    { image: workshopImg4, type: 'Immersion', name: 'Event Name 3', tag: 'Tag Line', date: '17 Apr, 2026' },
    { image: workshopImg2, type: 'Circle', name: 'Event Name 4', tag: 'Tag Line', date: '15 Apr, 2026' },
    { image: workshopImg1, type: 'Triangle', name: 'Event Name 5', tag: 'Tag Line', date: '18 Apr, 2026' },
    { image: workshopImg2, type: 'Rectangle', name: 'Event Name 6', tag: 'Tag Line', date: '19 Apr, 2026' },
]

const indulgeSlider = [
    { img: indulgeImage1, link: '/src/assets/images/holistic.webp', title: 'Structured Offerings', phara: 'Consistent practices to ground your everyday' },
    { img: indulgeImage2, link: '/src/assets/images/holistic.webp', title: 'Memberships', phara: 'A holistic rhythm of care across all dimensions' },
    { img: indulgeImage3, link: '/src/assets/images/holistic.webp', title: 'Pathways', phara: 'Guided journeys for specific goals and transformations' },
    { img: indulgeImage4, link: '/src/assets/images/holistic.webp', title: 'Events', phara: 'Circles, workshops, retreats & gatherings for connection & exploration' }
]

export default function Workshop() {
    return (
        <>
            <section className="py-18 bg-[#68320A]">
                <div className="container px-4 xl:px-8 mx-auto">
                    <div className="text-center text-white px-3">
                        <h1 className="text-title-xl mx-auto">Workshops & Retreats</h1>
                        <p className="font-medium font-montserrat md:text-lg max-w-3xl mx-auto mb-1.5">
                            Explore immersive experiences— designed to help you pause, reflect, and reconnect.
                        </p>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }
                        }}
                        className='mt-12 workshop-slider'
                    >
                        {workshopSlider.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Added 'flex' to this div so h-full works on the inner child */}
                                <div className="relative overflow-hidden flex h-[460px] z-[2] group rounded-lg">
                                    <div className="absolute inset-0 z-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-110" style={{backgroundImage: `url(${item.image})`}}/>
                                    <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent to-black opacity-50 from-[50%] to-[100%] pointer-events-none"></div>
                                    <div className="relative z-[2] w-full p-5 flex flex-col justify-between">

                                        <div>
                                            <p className='bg-[#68320A] font-montserrat font-medium rounded-full py-2 px-4 text-white inline-block w-max text-sm'>
                                                {item.type}
                                            </p>
                                        </div>

                                        <div className='text-white font-albert space-y-2'>
                                            <p className='text-xl font-normal leading-tight'>{item.name}</p>
                                            <p className='opacity-90'>{item.tag}</p>
                                            <p className='flex items-center gap-2 text-sm pt-2'>
                                                <Calendar size={16} />{item.date}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="py-18 bg-[#F7F5E9]">
                <div className="container px-4 xl:px-8 mx-auto">
                    <div className="text-center text-[#68320A] px-3">
                        <h1 className="text-title-xl mx-auto">Four Ways to Indulge at Samah</h1>
                        <p className="font-medium font-montserrat md:text-lg max-w-3xl mx-auto mb-1.5 text-[#3A391B]">
                            Wellbeing can be structured. It can also be gently indulgent.
                        </p>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation={true} // Corrected: lower case 'n' and boolean
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 }
                        }}
                        className='mt-12 workshop-slider'
                    >
                        {indulgeSlider.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Added 'flex' to this div so h-full works on the inner child */}
                                <div className="relative rounded-lg overflow-hidden bg-white group">
                                    <img src={item.img} alt="membership" className='h-[380px] w-full object-center object-cover transition-transform duration-700 ease-out group-hover:scale-110' />
                                    <div className='text-center font-montserrat space-y-3 p-5 text-[#3A391B]'>
                                        <h4 className='text-xl font-albert'>{item.title}</h4>
                                        <p className='font-medium'>{item.phara}</p>
                                        <BubbleButton to='/about' className='border-[#68320A] font-medium text-[#68320A] border-b pb-1 inline-block w-max mx-auto inline-block' bubbleColor="bg-[#68320A]/10">
                                            Explore More <ArrowRight className='inline-block w-[20px]' />
                                        </BubbleButton>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}