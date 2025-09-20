import React from "react";
import { Link } from "react-router-dom";

// Decorative background and service images
import bgFlower from "../../Images/Our-Service/bg-Flower-png-Use-It-InLargeWidth.png";
// We'll map services from expanded data; fallback images already in dataset
import { servicesExpanded } from "../data/servicesExpanded";

// Card layout refactored to avoid absolute positioned overlay that caused
// section being visually "covered" until scroll/layout reflow.
const Card = ({ img, title, onBook, linkTo = "/service/anti-aging" }) => (
  <div className="group">
    <div className="relative w-full overflow-hidden rounded-md shadow-md bg-[#f9e5d8]">
      <div className="w-full pt-[125%]" />{/* aspect ratio box (~4/5) */}
      <img
        src={img}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
    </div>
    <div className="-mt-10 relative z-10 mx-auto w-[92%] sm:w-[85%] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.12)] px-5 sm:px-6 py-4 text-center rounded-md">
      <h3 className="font-domine text-[#b37556] text-base sm:text-lg font-medium leading-snug whitespace-normal break-words [hyphens:auto]">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
        <Link
          to={linkTo}
          className="inline-flex items-center justify-center h-10 px-4 sm:px-5 rounded-md text-sm font-medium border border-[#ead9cf] text-[#a36f52] hover:border-[#c98963] hover:bg-orange-50 transition-colors duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98963] focus-visible:ring-offset-2"
        >
          <span>Learn More</span>
        </Link>
        <button
          type="button"
          onClick={onBook}
          className="inline-flex items-center justify-center h-10 px-4 sm:px-5 rounded-md text-sm font-medium bg-[#c98963] hover:bg-[#be7f58] text-white transition-colors duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98963] focus-visible:ring-offset-2"
        >
          <span>Book Now</span>
        </button>
      </div>
    </div>
  </div>
);

export default function OurService({ onBookAppointment }) {
  return (
    <section id="our-services" className="relative bg-[#fdeee2] scroll-mt-24">
      {/* side floral decoration */}
      <img
        src={bgFlower}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute left-0 top-6 h-[520px] w-auto opacity-60 filter brightness-75 contrast-125"
      />
      <img
        src={bgFlower}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute right-0 top-6 h-[520px] w-auto opacity-60 filter brightness-75 contrast-125 -scale-x-100"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-domine font-medium text-3xl sm:text-4xl text-[#b37556]">
            Our Service
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9b7a67]">
            Professional cosmetology care tailored to you. From deep-cleansing
            facials to gentle peels, we help restore balance and radiance.
          </p>
        </div>

        {/* Grid dynamically from expanded services subset (ordered) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
          {/* Updated list: replaced non-existent hair-gfc with hair-gfc-therapy */}
          {[
            "pigmentation-solutions",
            "skin-tightening",
            "hair-prp",
            "hair-gfc-therapy",
            "hair-regrowth-laser",
            "korean-skin-treatment",
            "anti-aging-solutions",
            "deep-peelings",
            "facials",
            "laser-hair-removal",
            "laser-skin-therapy",
            "mesotherapy",
            "microdermabrasion",
            // removed botox-treatment (no image in curated set) – add back if needed
          ].map((id) => {
            const svc = servicesExpanded.find((s) => s.id === id);
            if (!svc) return null;
            return (
              <Card
                key={id}
                img={svc.image}
                title={svc.title}
                onBook={onBookAppointment}
                linkTo={`/service/${id}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
