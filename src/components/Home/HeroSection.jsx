// import HeroBanner from "../../assets/images/hero_banner.webp";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BubbleButton from "../BubbleButton";

export default function HeroSection() {

    return (
        <>
            <section className="">
                <div className="grid grid-cols-1 xl:grid-cols-[55%_45%]">
                    <div className="min-h-[350px] overflow-hidden group">
                        <div className="parallax hero-image w-full h-[120%] -top-[10%] relative bg-[url('assets/images/hero_banner.webp')] bg-center bg-cover"></div>
                    </div>
                    <form className="flex flex-col justify-center gap-4 font-montserrat text-[#3A391B] font-medium text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] p-[clamp(0.85rem,3.2vw,4.2rem)] leading-normal xl:mx-10 max-w-3xl mx-auto">
                        <div>
                            <h1 className="text-[#8A8341] text-[clamp(2rem,3.2vw,3.5rem)] font-roundhand mb-0"><i>Not sure where to begin?</i></h1>
                            <h1 className="font-albert text-[clamp(1.8rem,2.2vw,2.5rem)] text-[#68320A] mb-4">Start with a gentle conversation.</h1>
                            <p className="font-montserrat text-[#3A391B] font-medium">Tell us what your body has been experiencing, and our team will guide you toward the right next step.</p>
                        </div>

                        <input type="text" placholder="Your Name" className="border-[#3A391B] border p-2 xl:p-3 rounded w-full placeholder:text-[#3A391B50] outline-0" />

                        <input type="number" placholder="Your Name" className="border-[#3A391B] border p-2 xl:p-3 rounded w-full placeholder:text-[#3A391B50] outline-0" />

                        <input type="email" placholder="Your Name" className="border-[#3A391B] border p-2 xl:p-3 rounded w-full placeholder:text-[#3A391B50] outline-0" />

                        <div className="flex flex-col ">
                            <label>What are you seeking support for?</label>
                            <textarea name="" id="" className="border-b border-[#3A391B] p-2 outline-0"></textarea>
                        </div>

                        <p className="font-medium">If you’re curious whether <b>Samah is right for you,</b> we invite you to begin with a <b>complimentary 15‑minute call.</b></p>

                        <BubbleButton 
                            type="submit" 
                            btnType="submit"
                            // bubbleColor='red'
                            className="flex items-center gap-2 justify-center text-center mt-10 w-full bg-[#68320A] p-3 text-white rounded"
                        >
                            Book a 15‑Minute Call <ArrowRight />
                        </BubbleButton>

                    </form>
                </div>
            </section >
        </>
    );
}
