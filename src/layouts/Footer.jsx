import footerLogo from '/src/assets/images/footer-logo.svg';

export default function Footer() {
    return (
        <>
            <footer className="bg-[#3A391B] py-12">
                <div className="container mx-auto">
                    <div className="flex">
                        <img src={footerLogo} alt="" className="w-[110px] mx-auto mb-5" />
                    </div>

                    <p className="text-center text-white font-montserrat text-lg border-t pt-8">© {new Date().getFullYear()} Samah Wellness. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}