import { useState, useEffect, useRef } from "react";
import Contact from "./Contact";
// import Faq from "./Faq";
import News from "./News";
import Vision from "./Vision";

const Home = () => {
  const [videoSrc, setVideoSrc] = useState("/vid.mp4");
  const [hasEnteredVision, setHasEnteredVision] = useState(false);
  const visionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const visionTop = visionRef.current?.getBoundingClientRect().top;

      if (visionTop <= 0) {
        setHasEnteredVision(true);
      }

      if (hasEnteredVision && window.scrollY === 0) {
        setVideoSrc("/video.mp4");
      } else if (!hasEnteredVision) {
        setVideoSrc("/vid.mp4");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasEnteredVision]);

  return (
    <>
      <section className="h-[89vh] flex justify-start items-end text-white relative">
        <video
          src={videoSrc}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
        ></video>
        {/* <div className="self-end ml-4 sm:ml-20 mb-24 flex flex-col gap-3"> */}
        <div className="flex flex-col gap-3 absolute bottom-24 left-8 sm:left-16">
          <h1 className="text-2xl sm:text-4xl">Moving towards</h1>
          <div className="flex gap-3">
            <span className="text-6xl sm:text-8xl text-button font-bold">Animal</span>
            <span className="text-6xl sm:text-8xl font-bold">Free</span>
          </div>
          <h4 className="text-[30px] sm:text-[40px] font-semibold">Drug Discovery</h4>
        </div>
      </section>
      <div ref={visionRef}>
        <Vision />
      </div>
      <News />
      {/* <Faq /> */}
      <Contact />
    </>
  );
};

export default Home;
