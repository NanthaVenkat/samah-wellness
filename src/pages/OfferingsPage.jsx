import HeroSection from '../layouts/HeroSection'
import Program from '../components/Offerings/program'
import OfferingBanner from "../assets/images/OfferingBanner.png"

function OfferingsPage() {
  return (
    <>
      <HeroSection
        bgColor='#fff'
        bannerImage={OfferingBanner}
        subtitle="Start with a gentle conversation."
        title="Not sure where to begin?"
        description="Tell us what your body has been experiencing..."
        notes="Which one of our offerings are you interested to explore?"
      >

        <h4 className='font-albert font-light mb-3 text-[clamp(1.25rem,4vw,2.5rem)]'>Samah Experiences - Structured Offerings</h4>
        <p className='mb-2'>A space where every dimension of you is held.</p>
        <p>At Samah, wellbeing is not approached in parts—it is experienced as a whole. Our offerings are thoughtfully designed across five dimensions, allowing you to enter from where you are, and gently expand into where you are meant to be.</p>
      </HeroSection>
      <Program />
    </>
  );
}

export default OfferingsPage;