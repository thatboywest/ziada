import HeroSection from "../components/HeroSection";
import SectionComponent from "../components/HowItWorks";
import NewsletterSection from "../components/NewsLetter";
import TestimonialsSection from "../components/Testimonial";


export default function Home() {
  return (
    <div>
        <HeroSection/>
        <SectionComponent/>
        <TestimonialsSection/>
        <NewsletterSection/>

    </div>
  )
}
