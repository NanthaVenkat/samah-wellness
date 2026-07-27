import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import BubbleButton from '../BubbleButton';
import { Calendar, ArrowRight } from 'lucide-react'
import indulgeImage1 from '/src/assets/images/home-1.png'
import indulgeImage2 from '/src/assets/images/Memberships.png'
import indulgeImage3 from '/src/assets/images/home-2.png'
import indulgeImage4 from '/src/assets/images/home-4.png'

const indulgeSlider = [
    { img: indulgeImage1, link: '', title: 'Auto Immune Circle', date: '25 July 2026', phara: 'A supportive gathering for those navigating autoimmune conditions to share experiences and find community.' },
    { img: indulgeImage2, link: '', title: 'Men’s Circle', date: '26 July 2026 | 5:00 PM – 8:00 PM', phara: 'A guided space for men to gather, share openly, and be heard without judgement.' },
    { img: indulgeImage3, link: '', title: 'Laughter Circle', date: '26 July 2026 | 5:00 PM – 6:30 PM', phara: 'Laugh freely. Breathe deeply. Release stress. Connect with joy in a safe, uplifting space where laughter becomes medicine for the mind, body, and soul.' },
]

export default function Workshop() {
    return (
        <>
            <section className="py-18 bg-[#3A391B]">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div class="px-4 xl:px-8 flex items-center justify-center">
                        <div className="flex flex-col h-full lg:py-12 max-w-[600px] text-white px-3">
                            <h1 className="text-title-xl !text-left">Samah Circles (Circles)</h1>
                            <div className='mb-4'>
                                <p className='font-roundhand text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight'><i>Celebrate, connect, and let go—consciously.</i></p>

                                <span className='inline-block w-[270px] h-[2px] bg-white'></span>
                            </div>
                            <p className="font-medium font-montserrat md:text-lg max-w-3xl mx-auto mb-1.5">
                                Silent joyful gatherings where mindfulness meets wellness
                                routines — music, movement, food, and connection, done consciously
                            </p>

                            <p className='font-roundhand mt-auto text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight'><i>A space to be real, light, and fully present.</i></p>
                        </div>
                    </div>

                    <div className='w-full px-4 lg:px-0'>
                        <Swiper
                            modules={[Navigation]}
                            navigation={true}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1200: { slidesPerView: 2.5 }
                            }}
                            className='workshop-slider'
                        >
                            {indulgeSlider.map((item, index) => (
                                <SwiperSlide key={index} className='!h-[unset]'>
                                    {/* Added 'flex' to this div so h-full works on the inner child */}
                                    <div className="relative rounded-lg overflow-hidden bg-white group h-full">
                                        <img src={item.img} alt="membership" className='h-[280px] w-full object-center object-cover transition-transform duration-700 ease-out group-hover:scale-110' />
                                        <div className='text-center font-montserrat space-y-3 p-5 text-[#3A391B]'>
                                            <h4 className='text-xl font-albert'>{item.title}</h4>
                                            <p className='font-medium'>{item.phara}</p>
                                            <p className='font-medium flex justify-center gap-2'><Calendar size={16} />{item.date}</p>

                                            {item.link && (
                                                <BubbleButton to='/about' btnType='link' classBeside='' className='border-[#68320A] font-medium text-[#68320A] border-b inline-block w-max mx-auto inline-block' bubbleColor="bg-[#ffffff00]/10">
                                                    Explore More <ArrowRight className='inline-block w-[20px]' />
                                                </BubbleButton>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </section>
        </>
    );
}