import { useState } from "react";

const galleryData = [
  {
    img: "/news2.svg",
    title: "Cellverse featured as Start Up of the Week by TiE Rajasthan.",
  },
  {
    img: "/news3.svg",
    title: "TiE Women Global Pitch Competition - Rajasthan Chapter",
  },
  {
    img: "/news4.svg",
    title: "Featured In Press & Media",
  },
];

const text = `Med-Tech joint program of AIIMS Jodhpur-IIT Jodhpur being explicitly
    quoted and appreciated by Honourable Prime Minister of India Shri
    Narendra Modi ji in his speech in Jodhpur while laying dedicating
    IIT Jodhpur to the nation & announcing multiple projects worth about
    Rs 5000 crores in Jodhpur, Rajasthan https://rb.gy/6pk59w Cellverse
    is proud to have blossomed from this unique program. Med-Tech is a
    unique joint program of AIIMS-IIT Jodhpur where solutions designed
    to the real-time problems in Health Sector are translated into a
    Strat Up`;

const News = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const halfTextLength = Math.floor(text.length / 2);
  const halfText = text.slice(0, halfTextLength);

  return (
    <section className="bg-newsBg py-20 sm:py-28 mt-5 sm:mt-0">
      <h1 className="text-center text-3xl sm:text-4xl text-white font-bold mb-10 sm:mb-20">
        News and Updates
      </h1>
      <div className="w-11/12 sm:w-10/12 bg-newsBg2 flex flex-col sm:flex-row gap-6 sm:gap-8 m-auto p-5 mb-10 sm:mb-20 rounded-xl">
        <div className="w-full sm:w-1/2">
          <img src="/news1.svg" alt="News Image 1" className="w-full" />
        </div>
        <div className="w-full sm:w-1/2 text-center">
          {!isExpanded ? (
            <>
              <p className="text-white text-lg text-center">{halfText}</p>
              <button
                onClick={handleToggle}
                className="text-white text-xl mt-5 text-center font-semibold"
              >
                Read More
              </button>
            </>
          ) : (
            <>
              <p className="text-white text-lg text-center">{text}</p>
              <button
                onClick={handleToggle}
                className="text-white text-xl mt-5 text-center font-semibold"
              >
                Read Less
              </button>
            </>
          )}
        </div>
      </div>

      <div className="w-11/12 sm:w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 m-auto">
        {galleryData.map((item, index) => (
          <div
            className="flex flex-col gap-4 bg-white rounded-xl p-4"
            key={index}
          >
            <img
              src={item.img}
              alt="News Image 2"
              className="w-full rounded-t-xl"
            />
            <p className="mx-3 font-semibold text-center">{item.title}</p>
            <button className="font-semibold mb-4">Read more</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
