import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow';
import BubbleButton from '../BubbleButton';
import { Calendar } from 'lucide-react'
import indulgeImage1 from '/src/assets/images/home-1.png'
import indulgeImage2 from '/src/assets/images/Memberships.png'
import indulgeImage3 from '/src/assets/images/home-2.png'
import indulgeImage4 from '/src/assets/images/home-4.png'
import whatSamah2 from "/src/assets/images/holistic.webp";

const indulgeSlider = [
    { img: indulgeImage1, title: 'Upcoming Tag', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage2, title: 'Upcoming Memberships', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage3, title: 'Upcoming Pathways', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage4, title: 'Upcoming Events', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage1, title: 'Upcoming Tag', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage2, title: 'Upcoming Memberships', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage3, title: 'Upcoming Pathways', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' },
    { img: indulgeImage4, title: 'Upcoming Events', date: '14 Apr, 2026', heading: 'Goddess Energy Retreat with Spiritual Gangster', phara: 'Movement and Ritual Designed to Empower Your Feminine Spirit', type: 'Retreat' }
]

export default function UpcommingEvents() {
    return (
        <>
            <section className="py-18">
                <div className='container mx-auto px-4 lg:px-0'>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                        <div className='text-'>
                            <h5 className='text-title-xl !text-left text-[#68320A]'>Upcoming Events</h5>
                            <p className='text-[#3A391B] text-2xl font-albertus'>Our Gatherings Samah Circles (Circles)</p>
                        </div>
                        <div>
                            <h4 className='font-roundhand text-5xl font-bold text-[#68320A] mb-6'><i>Spaces to pause, reflect, and be heard.</i></h4>
                            <p className='text-[#3A391B] text-xl font-montserrat font-medium'>Intimate, guided sharing spaces where conversations move beyond the surface — into awareness, connection, and quiet transformation.</p>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, EffectCards]}
                        navigation={true}
                        effect="cards"
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        loop='true'
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                                coverflowEffect: {
                                    slideShadows: true,
                                }
                            },
                            1200: {
                                slidesPerView: 1.5,
                                coverflowEffect: {
                                    slideShadows: true,
                                }
                            }
                        }}
                        className='workshop-slider'
                    >
                        {indulgeSlider.map((item, index) => (
                            <SwiperSlide key={index}>
                                {/* Added 'flex' to this div so h-full works on the inner child */}
                                <div className="min-h-[520px] flex rounded-xl overflow-hidden relative group">
                                    <div
                                        className='parallax absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105'
                                        style={{ backgroundImage: `url(${item.img})` }}
                                    />
                                    <div className="bg-gradient-to-t from-[#292927b0] to-[#fff0] absolute top-0 left-0 w-full h-full"></div>
                                    <div className='relative mt-auto font-montserrat space-y-3 p-12 text-[#ffffff]'>
                                        <p className='px-4 py-1 inline-block bg-yellow-0 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#FFFFFF66]'>{item.type}</p>
                                        <h4 className='text-2xl sm:text-3xl font-albert'>{item.title}</h4>
                                        <h4 className='text-xl sm:text-2xl font-albert'>{item.heading}</h4>
                                        <p className='font-medium sm:text-lg'>{item.phara}</p>
                                        <p className='font-medium flex items-center gap-3'><Calendar size={16} />{item.date}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <p className='text-[#3A391B] text-center mt-8 text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight'><i className='font-roundhand'>Not about fixing —</i></p>

                    <p className='text-center font-albertus text-2xl'>but about seeing, feeling, and understanding together.</p>
                </div>
            </section>
        </>
    );
}