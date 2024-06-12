// import React from "react";

const About = () => {
  return (
    <section className="min-h-[90vh] max-h-fit p-6 md:p-8 lg:p-12">
      <h1 className="text-5xl font-bold text-center mb-10">About us</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold">Motivation-</h3>
          <p>
            Around 20 million animals are killed for testing drugs/formulations
            at pre-clinical drug trials. Despite this, more than 90% of the
            drugs fail to match the results in human trials causing loss of
            billions of dollars and wasted sacrifice of animal lives. Here comes
            Cellverse Pvt. Ltd., with a vision to revolutionize pre-clinical
            testing procedures by developing non animal disease models for
            drugs/formulation testing. We design & develop invitro physiological
            and pathological models as an alternative platform for Preclinical
            Trials as required by the Pharmaceutical Industry and Biomedical
            Research Groups. We also develop bioink and other auxiliary
            technology as per requirements. Cellverse is a Med tech Company
            working at the interface of tissue engineering, 3D Bioprinting,
            Artificial Intelligence and Biomicrofluidics.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold">Vision-</h3>
          <p>
            To be the most trusted brand for delivering disruptive Innovations
            for Pre-clinical testing & Precision Medicine.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold">Mission-</h3>
          <p>
            To Develop innovative bioengineered solutions for animal free
            preclinical drugs, formulations, materials & devices testing and
            precision medicine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
