import whatSamah2 from "/src/assets/images/holistic.webp";

export default function HomeAbout() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 xl:px-8">
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
            </div>
        </section >
    );
}