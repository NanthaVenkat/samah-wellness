import footerLogo from '/src/assets/images/footer-logo.svg';
import { Link } from 'react-router-dom';
// import PrivacyPolicy from '/PrivacyPolicy';

export default function Footer() {
    return (
        <>
            <footer className="bg-[#3A391B] py-12">
                <div className="container mx-auto">
                    <div className="flex">
                        <img src={footerLogo} alt="" className="w-[110px] mx-auto mb-5" />
                    </div>

                    <div className="flex items-start flex-wrap justify-between text-white font-montserrat text-lg border-t pt-8">
                        <p className="text-center px-4">© {new Date().getFullYear()} Samah Wellness. All Rights Reserved.</p>

                        <p className='px-4'><Link to='/privacy-policy'>Refund Policy</Link></p>
                    </div>
                </div>
            </footer>
        </>
    );
}