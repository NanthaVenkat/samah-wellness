import whatSamah1 from "../../assets/images/what-samah.webp"

export default function HomeAbout() {
    return (
        <section className="py-20 bg-[#3A391B]">
            <div class="container mx-auto px-4 xl:px-8">
                <h2 class="text-title text-[#8A8341]">WHAT SAMAH IS</h2>
                <h1 className="text-title-xl text-white max-w-[560px] mx-auto">Wellness, brought back into harmony.</h1>

                <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
                    <div class="rounded-xl p-4 flex items-center justify-between gap-5 font-montserrat bg-[#D5CFBA] group overflow-hidden">
                        <div className="text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] text-[#3A391B] z-10">
                            <p className="font-medium">Not just <br /><b>another Studio</b></p>
                        </div>
                        <img src={whatSamah1} alt="" className="object-center object-cover w-[120px] h-[120px] rounded-xl transition-transform duration-700 ease-out group-hover:scale-110" />
                    </div>

                    <div class="rounded-xl p-4 flex items-center justify-between gap-5 font-montserrat bg-[#D5CFBA] group overflow-hidden">
                        <div className="text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] text-[#3A391B] z-10">
                            <p className="font-medium">Not just <br /><b>another Studio</b></p>
                        </div>
                        <img src={whatSamah1} alt="" className="object-center object-cover w-[120px] h-[120px] rounded-xl transition-transform duration-700 ease-out group-hover:scale-110" />
                    </div>

                    <div class="rounded-xl p-4 flex items-center justify-between gap-5 font-montserrat bg-[#D5CFBA] group overflow-hidden">
                        <div className="text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] text-[#3A391B] z-10">
                            <p className="font-medium">Not just <br /><b>another Studio</b></p>
                        </div>
                        <img src={whatSamah1} alt="" className="object-center object-cover w-[120px] h-[120px] rounded-xl transition-transform duration-700 ease-out group-hover:scale-110" />
                    </div>

                    <div class="rounded-xl p-4 flex items-center justify-between gap-5 font-montserrat bg-[#D5CFBA] group overflow-hidden">
                        <div className="text-[clamp(0.85rem,0.98rem+0.2vw,1.125rem)] text-[#3A391B] z-10">
                            <p className="font-medium">Not just <br /><b>another Studio</b></p>
                        </div>
                        <img src={whatSamah1} alt="" className="object-center object-cover w-[120px] h-[120px] rounded-xl transition-transform duration-700 ease-out group-hover:scale-110" />
                    </div>
                </div>

                <div class="rounded-xl p-7 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5 mt-5 bg-[#D5CFBA] group overflow-hidden">
                    <div className="flex flex-col justify-center text-[#3A391B] z-10">
                        <h1 className="font-albertus text-[clamp(2.25rem,0.98rem+0.2vw,1.125rem)] leading-tight"><i className="font-roundhand">Introducing Samah Wellness House,</i> <br /> a Communal House for Holistic Well-being.</h1>

                        <p className="font-montserrat font-medium text-[clamp(0.85rem,0.98rem+0.2vw,3.125rem)]">A science‑aware, deeply personalised wellness ecosystem.</p>
                    </div>

                    <div className="min-h-[220px] rounded-xl overflow-hidden relative group">
                        <div className="parallax absolute -top-[10%] left-0 w-full h-[120%] bg-[url('assets/images/holistic.webp')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}