import React, { useEffect, useRef } from "react";

// Import videos so Vite bundles them from the project root
import v1 from "../../Videos/insta-video/1.mp4";
import v2 from "../../Videos/insta-video/2.mp4";
import v3 from "../../Videos/insta-video/3.mp4";
import v4 from "../../Videos/insta-video/4.mp4";

const videos = [v1, v2, v3, v4];

export default function InstaReels() {
  const videoRefs = useRef([]);

  // Ensure all videos auto-play when in view; handle browser auto-play policies
  useEffect(() => {
    const playAll = async () => {
      for (const vid of videoRefs.current) {
        if (!vid) continue;
        try {
          await vid.play();
        } catch (e) {
          // Some browsers block autoplay; try muted and play on user interaction
          vid.muted = true;
          vid.play().catch(() => {});
        }
      }
    };
    playAll();
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#7a1121]">
          Our Instagram <span className="text-[#7a1121]">_dskinova</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
          {videos.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] w-full overflow-hidden rounded-md bg-black shadow"
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                preload="metadata"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/_dskinova/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#c98963] px-6 sm:px-8 py-3 text-white text-sm sm:text-base font-medium hover:bg-[#be7f58] transition-colors"
            aria-label="Follow us on Instagram"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
