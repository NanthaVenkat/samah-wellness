import BubbleButton from '../BubbleButton';
import { Calendar, ArrowRight } from 'lucide-react'
import whatSamah2 from "/src/assets/images/holistic.webp";
import sliderImg from "../../assets/images/founded.png"
import checkGreen from "../../assets/images/green-check.svg"
import downloadicon from "../../assets/images/download.svg"
import phoneIcon from "../../assets/images/cell.svg"

export default function HomeAbout() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 xl:px-8">

                <div class="grid lg:grid-cols-2 gap-6 mb-20">

                    {/* <div className="rounded-4xl overflow-hidden">
                        <img src={sliderImg} alt="" className="parallax" />
                    </div> */}

                    <div className="min-h-[360px] rounded-xl overflow-hidden relative group">
                        <div
                            className='parallax absolute -top-[10%] left-0 w-full h-[140%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105'
                            style={{ backgroundImage: `url(${sliderImg})` }}
                        />
                    </div>

                    <div className="flex flex-col justify-center mx-auto gap-6 max-w-[600px]">
                        <h1 className="text-title-xl text-[#68320A] !text-left">What Makes Samah Gatherings Different</h1>
                        <ul className="text-[#3A391B] font-medium text-lg font-montserrat space-y-4">
                            <li className="flex items-center gap-4"><img src={checkGreen} alt="" className="w-[35px]" /> Not overwhelming—deep yet light</li>
                            <li className="flex items-center gap-4"><img src={checkGreen} alt="" className="w-[35px]" /> Not performative—real and human</li>
                            <li className="flex items-center gap-4"><img src={checkGreen} alt="" className="w-[35px]" /> Not isolating—deeply communal</li>
                        </ul>
                    </div>
                </div>

                <div className="rounded-xl p-7 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-y-5 mt-5 bg-[#8A8341] group overflow-hidden">
                    <div className="flex flex-col justify-center text-[#fff] z-10">
                        <h1 className="font-albertus text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight">You don’t have to come as a different version of yourself.</h1>

                        <h1 className="font-albertus text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight"><i className="font-roundhand">You can simply come as you are.</i></h1>
                    </div>

                    <div className="min-h-[220px] rounded-xl overflow-hidden relative group">

                        <div
                            className='parallax absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105'
                            style={{ backgroundImage: `url(${whatSamah2})` }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
                    <div className='text-center'>
                        <h5 className='text-title !text-2xl text-[#1F1D1D]'>Join the Samah Collective today</h5>

                        <BubbleButton to='/about' btnType='link' classBeside='' className='border-[#8A8341] font-medium text-[#8A8341] leading-tight text-xl border-b inline-block w-max mx-auto inline-block font-montserrat' bubbleColor="bg-[#FFFFFF9F]/10">
                            Book a Discovery Call <ArrowRight className='inline-block w-[20px]' />
                        </BubbleButton>
                    </div>
                    <div>
                        <ul className='font-montserrat space-y-4 text-xl max-w-[300px] mx-auto text-[#1F1D1D] font-medium underline'>
                            <li><a href="tel:+" className='flex gap-4'><img src={phoneIcon} alt="" className='w-[30px] h-[30px]' />Speak to Our Team</a></li>
                            <li><a href="" download className='flex gap-4'><img src={downloadicon} alt="" className='w-[30px] h-[30px]' />Download Pathways</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
}