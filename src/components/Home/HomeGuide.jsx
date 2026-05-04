export default function HomeGuide() {
    return (
        <>
            <section className="py-20">
                <div className="container px-4 xl:px-8 mx-auto">
                    <div className="max-w-[680px] text-center mx-auto">
                        <h2 className="text-title text-[#8A8341]">THE PHILOSOPHY OF WA</h2>
                        <h1 className="text-title-xl text-[#68320A] max-w-[560px] mx-auto mb-4">Guided by Wa (和)</h1>
                        <p className="text-[#1F1D1D] text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] font-medium font-montserrat">
                            At the heart of Samah lies Wa — the quiet harmony of balance. A reminder that wellbeing is not found in extremes, but in right relationship— between effort and ease, strength and softness, self and community.
                        </p>
                    </div>

                    <div className="mt-8 gap-y-8 md:gap-y-0 flex flex-wrap md:flex-nowrap">
                        {/* First Image */}
                        <div className="inline-block w-full sm:w-1/2 md:w-1/4 min-h-[220px] overflow-hidden px-2">
                            <img src="src/assets/images/holistic.webp" alt="" className="w-full h-full object-cover rounded-xl" />
                        </div>

                        {/* Text Content */}
                        <div className="inline-block w-full md:w-2/4 order-3 md:order-2 text-center text-[clamp(0.85rem,0.98rem+1vw,1.85rem)] text-[#1F1D1D] font-albert space-y-2 lg:mb-28">
                            <p>When the body feels safe, it restores.</p>
                            <p>When the mind is clear, it settles.</p>
                            <p>When energy flows, it lightens.</p>
                            <p>When the soul is heard, it aligns.</p>
                            <p>When we feel connected, we belong.</p>
                        </div>

                        {/* Second Image */}
                        <div className="inline-block w-full sm:w-1/2 md:w-1/4 order-3 sm:order-2 md:order-3 min-h-[220px] overflow-hidden px-2">
                            <img src="src/assets/images/holistic.webp" alt="" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}