import { AiOutlineLinkedin } from "react-icons/ai";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="bg-footerBg text-white py-16">
      <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row gap-12 m-auto">
        <div className="w-full md:w-2/5 flex flex-col gap-2 text-center md:text-left">
          <div>
            <h3 className="font-bold">
              Reinventing Preclinical Drug Discovery:
            </h3>
            <h3 className="font-bold">
              Moving towards animal free Drug Discovery
            </h3>
          </div>
          <h3 className="font-bold">Address:</h3>
          <div>
            <p>Cellverse Pvt. Ltd. TISC-IIT JODHPUR</p>
            <p>Karwar Road Jodhpur</p>
          </div>
          <h3 className="font-bold">Email:</h3>
          <p>kanika.singroha@cellverse.org</p>
        </div>

        <div className="w-full md:w-1/5 text-center md:text-left">
          <h3 className="font-bold mb-5">Information</h3>
          <ul className="list-none flex flex-col gap-2">
            <li>Home</li>
            <li>About</li>
            <li>People</li>
            <li>Product</li>
            <li>Innovations</li>
            <li>Commitment</li>
          </ul>
        </div>

        <div className="w-full md:w-2/5 text-center md:text-left">
          <h3 className="font-bold mb-5">Newsletter</h3>
          <p>
            Don&apos;t miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <input
            type="text"
            placeholder="Email"
            className="w-full md:w-10/12 bg-white py-2 px-5 my-3 rounded-lg"
          />
          <button className="bg-button py-2 px-6 rounded-lg">Subscribe</button>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <AiOutlineLinkedin size={25} className="text-icons" />
            <RiInstagramLine size={25} className="text-icons" />
            <FaFacebook size={25} className="text-icons" />
            <RiTwitterXLine size={25} className="text-icons" />
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 m-auto text-center md:text-left">
        <hr className="my-4 text-gray-500" />
        <p>Copyright@Cellverse</p>
      </div>
    </section>
  );
};

export default Footer;
