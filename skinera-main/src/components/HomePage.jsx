import React, { useState } from "react";
import Header from "./Header.jsx";
// import Hero from "./Hero.jsx";
import NewHeroSlider from "./NewHeroSlider.jsx";
import SecondSection from "./SecondSection.jsx";
import OurService from "./OurService.jsx";
import AboutUs from "./AboutUs.jsx";
import FounderMessage from "./FounderMessage.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import StorySection from "./StorySection.jsx";
import GoogleReviewsAutoSlider from "./GoogleReviewsAutoSlider.jsx";
import ExpertSkincare from "./ExpertSkincare.jsx";
import GalleryCollection from "./GalleryCollection.jsx";
import ConsultationBanner from "./ConsultationBanner.jsx";
import LatestNews from "./LatestNews.jsx";
import ExclusiveUpdate from "./ExclusiveUpdate.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import InstaReels from "./InstaReels.jsx";

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);
  const handleAppointmentSubmit = (payload) => {
    // TODO: Wire to backend or service (email, API). For now, just log.
    console.log("Appointment request:", payload);
  };

  return (
    <div className="min-h-screen bg-[#e0a075]">
      <Header onBookAppointment={openAppointment} />
      {/* <Hero onBookAppointment={openAppointment} /> */}
      <NewHeroSlider onBookAppointment={openAppointment} />
      <SecondSection />
      <OurService onBookAppointment={openAppointment} />
      <AboutUs />
      <FounderMessage />
      <WhyChooseUs />
      <StorySection />
      <GoogleReviewsAutoSlider autoSlideInterval={4000} showControls={true} />
      <ExpertSkincare />
      <GalleryCollection />
      <ConsultationBanner onBookAppointment={openAppointment} />
      <InstaReels />
      <LatestNews />
      <ExclusiveUpdate />
      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
