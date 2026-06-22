import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import whatSamah2 from "/src/assets/images/holistic.webp";
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
    { img: indulgeImage1, link: '/src/assets/images/holistic.webp', title: 'Tag', date: '14 Apr, 2026', phara: 'Tag Line' },
    { img: indulgeImage2, link: '/src/assets/images/holistic.webp', title: 'Memberships', date: '14 Apr, 2026', phara: 'Tag Line' },
    { img: indulgeImage3, link: '/src/assets/images/holistic.webp', title: 'Pathways', date: '14 Apr, 2026', phara: 'Tag Line' },
    { img: indulgeImage4, link: '/src/assets/images/holistic.webp', title: 'Events', date: '14 Apr, 2026', phara: 'Tag Line' }
]

export default function Workshop() {
    return (
        <>
            <section className="py-18 bg-[#68320A]">
                <div className="container px-4 xl:px-8 mx-auto">
                    <div className="text-center text-white px-3">
                        <h1 className="text-title-xl mx-auto">Samah Explorations (Workshops)</h1>
                        <div className='mb-4'>
                            <p className='font-roundhand text-center text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight'><i>Learn, experience, and deepen your practice.</i></p>

                            <span className='inline-block w-[270px] h-[2px] bg-white'></span>
                        </div>
                        <p className="font-medium font-montserrat md:text-lg max-w-3xl mx-auto mb-1.5">
                            Interactive sessions that bring together movement, mind, and lifestyle — helping you explore different dimensions of wellbeing in a hands-on way.
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
                                    <div className="absolute inset-0 z-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
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

                    <p className='font-roundhand text-center text-white mt-6 text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight mb-8'><i>Curiosity meets clarity.</i></p>

                    <BubbleButton
                        to=''
                        btnType="link"
                        className="flex font-montserrat items-center gap-3 text-[clamp(1rem,0.98rem+0.2vw,1.125rem)] rounded-md bg-[#68320A] text-white w-max mt-auto mx-auto border"
                    >
                        View All <ArrowRight width={20} />
                    </BubbleButton>
                </div>
            </section>

            <section className="py-18 bg-[#F7F5E9]">
                <div className="container px-4 xl:px-8 mx-auto">
                    <div className="text-center text-[#68320A] px-3">
                        <h1 className="text-title-xl mx-auto">Samah Retreats</h1>
                        <div className='mb-4'>
                            <p className='font-roundhand text-center text-[#3A391B] text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight'><i>Step away to return to yourself.</i></p>

                            <span className='inline-block w-[270px] h-[2px] bg-[#8A8341]'></span>
                        </div>
                        <p className="font-medium font-montserrat md:text-lg max-w-3xl mx-auto mb-1.5 text-[#3A391B]">
                            Immersive experiences designed to take you out of your routine — and into a space of
                            rest, reset, and deeper alignment.
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
                        {indulgeSlider.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Added 'flex' to this div so h-full works on the inner child */}
                                <div className="relative rounded-lg overflow-hidden bg-white group">
                                    <img src={item.img} alt="membership" className='h-[280px] w-full object-center object-cover transition-transform duration-700 ease-out group-hover:scale-110' />
                                    <div className='text-center font-montserrat space-y-3 p-5 text-[#3A391B]'>
                                        <h4 className='text-xl font-albert'>{item.title}</h4>
                                        <p className='font-medium'>{item.phara}</p>
                                        <p className='font-medium'>{item.date}</p>
                                        <BubbleButton to='/about' btnType='link' classBeside='' className='border-[#68320A] font-medium text-[#68320A] border-b inline-block w-max mx-auto inline-block' bubbleColor="bg-[#ffffff00]/10">
                                            Explore More <ArrowRight className='inline-block w-[20px]' />
                                        </BubbleButton>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className='font-roundhand text-[#3A391B] text-center mt-8 text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight'><i>Pause. Breathe. Realign.</i></p>
                </div>

                {/* <div className="container mx-auto px-4 xl:px-8 mt-12">
                    <div className="rounded-xl p-7 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-y-5 mt-5 bg-[#8A8341] group overflow-hidden">
                        <div className="flex flex-col justify-center text-[#fff] z-10">
                            <h1 className="font-albertus text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight">You don’t have to come as a different version of yourself.</h1>

                            <h1 className="font-roundhand text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight"><i>You can simply come as you are.</i></h1>
                        </div>

                        <div className="min-h-[220px] rounded-xl overflow-hidden relative group">

                            <div
                                className='parallax absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105'
                                style={{ backgroundImage: `url(${whatSamah2})` }}
                            />
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
}
