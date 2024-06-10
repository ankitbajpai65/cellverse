const Contact = () => {
  return (
    <section className="py-20">
      <h1 className="text-center text-4xl font-bold mb-24">Contact Us</h1>

      <div className="w-11/12 sm:w-9/12 m-auto flex flex-col md:flex-row gap-5">
        <div className="md:w-2/6 flex flex-col gap-2">
          <h3 className="font-bold">Address:</h3>
          <div>
            <p>Cellverse Pvt. Ltd. TISC-IIT JODHPUR</p>
            <p>Karwar Road Jodhpur</p>
          </div>
          <h3 className="font-bold">Email:</h3>
          <p>kanika.singroha@cellverse.org</p>
        </div>
        <div className="md:w-4/6 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 bg-inputBg py-2 px-5 text-black rounded-md custom-placeholder"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full md:w-1/2 bg-inputBg py-2 px-5 text-black rounded-md custom-placeholder"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-inputBg py-2 px-5 text-black rounded-md custom-placeholder"
          />
          <textarea
            rows="5"
            type="text"
            placeholder="Write your message"
            className="bg-inputBg py-3 px-5 text-black rounded-md custom-placeholder"
          />
          <button className="w-1/3 md:2/5 lg:w-1/4 bg-button font-bold text-white py-2 px-6 rounded-lg ml-auto">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
