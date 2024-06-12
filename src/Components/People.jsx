const foundingTeam = [
  {
    src: "/team/team1.svg",
    name: "Dr. Kanika Shingora",
    title: "(MDS, PhD scholar)",
  },
  { src: "/team/team2.svg", name: "Dr. Indranil Banerjee", title: "(PhD)" },
];

const advisors = [
  {
    src: "/team/team3.svg",
    name: "Dr. Mohit Gambhir",
    title: "(MDS, PhD scholar)",
  },
  {
    src: "/team/team4.svg",
    name: "Mr. Nabeen Jha",
    title: "(MDS, PhD scholar)",
  },
  {
    src: "/team/team3.svg",
    name: "Dr. Shilpi Gupta Dixit",
    title: "(MDS, PhD scholar)",
  },
  { src: "/team/team5.svg", name: "Mr. Devesh Rakhecha", title: "(PhD)" },
];

const People = () => {
  return (
    <section className="min-h-[90vh] max-h-fit p-6 md:p-8 lg:p-12">
      <div>
        <h1 className="text-4xl font-bold text-center mb-5">Founding Team</h1>
        <div className="w-full lg:w-2/3 p-5 flex gap-5 m-auto">
          {foundingTeam.map((member, index) => (
            <div className="w-1/2 flex flex-col justify-center" key={index}>
              <img src={member.src} alt="" />
              <h6 className="text-xl font-bold mt-3 mb-2">{member.name}</h6>
              <p className="text-base">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-center mt-8 mb-5">Advisors</h1>
        <div className="w-full p-0 md:p-5 flex flex-col sm:flex-row flex-wrap md:flex-nowrap justify-center gap-5 mb-12">
          {advisors.map((advisor, index) => (
            <div
              className="w-1/2 sm:w-1/3 md:w-1/4 flex flex-col justify-center m-auto sm:m-0"
              key={index} 
            >
              <img src={advisor.src} alt="" />
              <h6 className="text-xl font-bold mt-3 mb-2">{advisor.name}</h6>
              <p className="text-base">{advisor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;
