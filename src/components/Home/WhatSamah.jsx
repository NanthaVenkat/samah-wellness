import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion';
import BubbleButton from '../BubbleButton';

const evolving = [
    { phara: 'Integrated, not fragmented and root‑cause focused' },
    { phara: 'Curated pathways — not generic classes' },
    { phara: 'Science‑aware, body‑led, supported by certified health coach and practitioners' },
    { phara: 'Progress you can track through measurable outcomes' },
    { phara: 'Small group, high-attention environment and a community that truly supports' },
    { phara: 'Designed for sustainable, long-term change' },
];

export default function WhatIsSamah() {
    return (
        <section className="bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 min-h-[460px] overflow-hidden relative group">
                    <div data-speed="0.9" className="absolute -top-[10%] left-0 w-full h-[120%] bg-[url('src/assets/images/holistic.webp')] bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-105"></div>
                </div>

                <div className="w-full md:w-1/2 p-5 sm:p-8 lg:p-18 font-albert space-y-2">
                    <h2 className="text-xl md:text-4xl mb-6 text-[#68320A]">What Makes Samah Different?</h2>
                    <p className='text-[#3A391B] text-xl font-light'>You visit one place for movement.</p>
                    <p className='text-[#3A391B] text-xl font-light'>Another for recovery.</p>
                    <p className='text-[#3A391B] text-xl font-light'>Another for emotional support.</p>

                    <p className='text-[#8A8341] text-[clamp(2rem,3.2vw,3.5rem)] font-roundhand'><i>Progress feels… temporary.</i></p>

                    <p className="text-[#1F1D1D] font-montserrat font-medium">Integrated, not fragmented and root‑cause focused</p>
                    <div className="space-y-4">

                        <div className="flex flex-col mb-5 items-start text-[#3A391B]">
                            {evolving.map((evolve, index) => (

                                <p key={index} className="flex font-montserrat font-medium py-4 border-t w-full mb-0"><span className="inline-block mr-8">/0{index + 1}</span> {evolve.phara}</p>

                            ))}
                        </div>

                        <BubbleButton to='#' className='flex items-center justify-center font-montserrat font-medium py-2 px-4 gap-3 text-white bg-[#68320A] w-full text-center rounded'>
                            Book a 15‑Minute Call <ArrowRight />
                        </BubbleButton>

                    </div>
                </div>
            </div>
        </section>
    );
}