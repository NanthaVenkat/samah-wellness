import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const workshopSlider = [
    { image: 'src/assets/images/holistic.webp', type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
    { image: 'src/assets/images/holistic.webp', type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
    { image: 'src/assets/images/holistic.webp', type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
    { image: 'src/assets/images/holistic.webp', type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
    { image: 'src/assets/images/holistic.webp', type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
    { image: 'src/assets/images/holistic.webp', type: 'Retreat', name: 'Event Name 1', tag: 'Tag Line', date: '14 Apr, 2026' },
]

const indulgeSlider = [
    { link: 'src/assets/images/holistic.webp', title: 'Structured Offerings', phara: 'Consistent practices to ground your everyday' },
    { link: 'src/assets/images/holistic.webp', title: 'Memberships', phara: 'A holistic rhythm of care across all dimensions' },
    { link: 'src/assets/images/holistic.webp', title: 'Pathways', phara: 'Guided journeys for specific goals and transformations' },
    { link: 'src/assets/images/holistic.webp', title: 'Events', phara: 'Circles, workshops, retreats & gatherings for connection & exploration' }
]

export default function Workshop() {
    return (
        <>
            <section className="py-18 bg-[#68320A]">
                <div className="container px-4 xl:px-8 mx-auto">
                    <div className="text-center text-white px-3">
                        <h1 className="text-title-xl mx-auto">Workshops & Retreats</h1>
                        <p className="font-medium font-montserrat md:text-lg max-w-[680px] mx-auto mb-1.5">
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
                                <div className="relative overflow-hidden flex h-[460px] z-[2] bg-[url('src/assets/images/holistic.webp')] bg-center bg-cover p-5 rounded-lg
                                            after:content-[''] after:absolute after:inset-0 after:z-[1] 
                                            after:bg-gradient-to-b after:from-transparent after:to-black after:opacity-50 after:from-[50%] after:to-[100%]">

                                    {/* h-full now works because parent is flex */}
                                    <div className='relative z-[5] flex flex-col justify-between w-full h-full'>
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
                        <p className="font-medium font-montserrat md:text-lg max-w-[680px] mx-auto mb-1.5 text-[#3A391B]">
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
                                <div className="relative rounded-lg overflow-hidden bg-white">
                                    <img src="src/assets/images/Memberships.png" alt="membership" className='h-[380px] object-center object-cover' />
                                    <div className='text-center font-montserrat space-y-3 p-5 text-[#3A391B]'>
                                        <h4 className='text-xl font-albert'>{item.title}</h4>
                                        <p className='font-medium'>{item.phara}</p>
                                        <Link to='/about' className='border-[#68320A] font-medium text-[#68320A] border-b pb-1'>Explore More <ArrowRight className='inline-block w-[20px]' /></Link>
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