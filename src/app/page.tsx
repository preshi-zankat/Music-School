import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { main } from "motion/react-client";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (   
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection></HeroSection>
    <FeaturedCourses></FeaturedCourses>
    <WhyChooseUs></WhyChooseUs>
    <MusicSchoolTestimonials></MusicSchoolTestimonials>
    <UpcomingWebinars></UpcomingWebinars>
    <Instructors></Instructors>
    <Footer></Footer>
  </main> 
  );
}
