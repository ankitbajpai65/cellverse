import { useEffect, useState } from "react";

const Vision = () => {
  const [topValue, setTopValue] = useState("0px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTopValue("-60px");
      } else {
        setTopValue("0px");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-16">
      <h1 className="text-3xl font-bold my-5 text-center">Our Vision</h1>

      <div className="h-96 w-full flex flex-col md:flex-row gap-16 justify-center items-center border-tl-full px-5 relative">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "90%",
            width: "86%",
            borderTopLeftRadius: "400px",
            borderBottomLeftRadius: "400px",
            backgroundColor: "#F2F2F2",
          }}
        ></div>
        <div className="h-4/5 relative mt-40 sm:mt-28 md:mt-0">
          <img src="/vision.svg" alt="" className="absolute h-full w-full" />
          <img src="/rectangle2.svg" alt="" className="h-full w-full" />
        </div>

        <div className="px-15 z-40">
          <h1 className="text-3xl font-bold mb-3">
            Breaking Boundaries, Preserving Ethics:
          </h1>
          <p>
            Breaking Boundaries, Preserving Ethics: Revolutionizing Drug
            Discovery Through Animal-Free Research
          </p>
        </div>
      </div>

      <div className="h-60 sm:h-40 block md:hidden"></div>

      <div className="h-96 w-full flex flex-col-reverse md:flex-row gap-16 justify-center items-center border-tl-full px-5 mt-16 relative">
        <div
          className="bg-vision"
          style={{
            position: "absolute",
            top: topValue,
            left: 0,
            height: "90%",
            width: "86%",
            borderTopRightRadius: "400px",
            borderBottomRightRadius: "400px",
            backgroundColor: "#F2F2F2",
            float: "left",
          }}
        ></div>
        <div className="px-15 z-40">
          <h1 className="text-3xl font-bold mb-3">
            Breaking Boundaries, Preserving Ethics:
          </h1>
          <p>
            Breaking Boundaries, Preserving Ethics: Revolutionizing Drug
            Discovery Through Animal-Free Research
          </p>
        </div>
        <div className="h-4/5 relative">
          <img src="/greenShape.svg" alt="" className="h-full w-full" />
          <img
            src="/vision2.svg"
            alt=""
            className="absolute top-0 right-14 h-full w-full z-40"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
