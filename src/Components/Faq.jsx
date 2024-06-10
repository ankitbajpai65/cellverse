import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const Faq = () => {
  const [openedAccordion, setOpenedAccordion] = useState(null);

  return (
    <section className="py-20">
      <h1 className="text-center text-4xl font-bold mb-24">FAQ&apos;s</h1>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((item) => {
          const isOpen = openedAccordion === item;
          return (
            <div
              key={item}
              className="w-11/12 md:w-9/12 bg-accordianBg m-auto p-5 rounded-md"
            >
              <div className="flex justify-between">
                <span className="font-semibold">Is it accessible?</span>
                <IoChevronDownOutline
                  size={25}
                  onClick={() => setOpenedAccordion(isOpen ? null : item)}
                  className={`mt-2 cursor-pointer hover:bg-gray-300 p-1 rounded-full ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isOpen && <p>Yes. It adheres to the WAI-ARIA design pattern.</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
