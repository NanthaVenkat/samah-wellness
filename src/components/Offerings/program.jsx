import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CloudDownload } from "lucide-react"

import sliderImg from "../../assets/images/founded.png"

function Program() {

    return (
        <>
            <section className="py-18">
                <div class="container mx-auto px-4">

                    {/* Heading and title */}
                    <div class="grid lg:grid-cols-2 gap-3 font-albert mb-12">
                        <h2 className="text-[clamp(1.65rem,2vw,3rem)] text-[#68320A]">Body & Rejuvenation</h2>

                        <div>
                            <h5 className="text-[#8A8341] text-[clamp(1.25rem,2vw,1.50rem)] mb-3">Return to your body as a place of strength, ease, and vitality.</h5>
                            <p className="text-[#1F1D1D] font-montserrat font-medium text-[clamp(1rem,2vw,1.15rem)]">From movement to therapeutic touch, this space is about reconnecting with your physical self—not just to heal, but to feel alive again.</p>
                        </div>
                    </div>

                    {/* Program Name Button */}
                    <div class="flex gap-3 w-max mx-auto overflow-auto text-[#1F1D1D] font-bold font-montserrat px-4 mb-8">
                        <button className="border border-[#D5CFBA] bg-white whitespace-nowrap px-5 py-2 rounded-full cursor-pointer">Body</button>
                        <button className="border border-[#D5CFBA] bg-white whitespace-nowrap px-5 py-2 rounded-full cursor-pointer">Rejuvenation</button>
                        <button className="border border-[#D5CFBA] bg-white whitespace-nowrap px-5 py-2 rounded-full cursor-pointer">Ayurvedic Massages</button>
                    </div>

                    {/* Program Slide wrapper */}
                    <div className="flex text-[#8A8341] font-montserrat mb-4">

                        <h4 className="text-[clamp(1.25rem,2vw,1.75rem)] font-albert">Body</h4>

                        <button className="font-bold uppercase space-x-2 ml-auto cursor-pointer"><CloudDownload className="inline-block" /><span className="underline">Download Body</span></button>
                    </div>

                    <div class="rounded-[20px] bg-white p-10 text-[#1F1D1D] font-montserrat font-medium text-[clamp(1rem,2vw,1.15rem)]">
                        <div class="w-1/2 mb-8">
                            <h3 className="font-albert font-light text-[clamp(1.45rem,2vw,2rem)] mb-3">Generic yoga</h3>
                            <p className="text-[#3A391B]">Lorem Ipsum to therapeutic touch, this space is about reconnecting with your physical self—not just to heal, but to feel alive again.</p>
                        </div>

                        <div className="flex flex-wrap">
                            <div class="inline-block w-1/2">
                                <div class="flex flex-wrap gap-y-5">
                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group (1 session) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 499</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group-1 month (12 sessions) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 3499</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group-3 months (36 sessions) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 8999</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group-6 months (72 sessions) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 15999</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group-12 months (144 sessions) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 28999</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group (1 session) online</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 250</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Group- 1 month (12 sessions) online</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 2499</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Personal 1:1 (1 session) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 999</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Personal 1:1- 1 month (12 sessions) offline</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 9999</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Personal 1:1 (1 session) online</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 750</div>
                                    </div>

                                    <div className="text-center w-[220px]">
                                        <div className="bg-[#E7EDED] border border-[#94ABA9] p-3">Personal 1:1 - 1 month (12 session) online</div>
                                        <div className="border border-t-0 border-[#94ABA9] p-3">₹ 7499</div>
                                    </div>
                                </div>
                            </div>
                            <div class="inline-block w-1/2">
                                <img src={sliderImg} alt="" className="rounded-xl parallax" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Program;