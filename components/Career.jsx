import CareerFirstPart from "./CareerFirstPart";
import CareerSecondPart from "./CareerSecondPart";
import CareerTopPart from "./CareerTopPart";

const Career = () => {
  return (
    <section id="career" className="md:career-bg text-white">
      <div className="md:section-container">
        <div className="mobile:hidden flex gap-x-[115px] desktop:justify-between tablet:mb-3 desktop:mb-6">
          <CareerTopPart />
        </div>
        <div className="md:flex tablet:gap-x-5 desktop:gap-x-6">
          <CareerFirstPart />
          <CareerSecondPart />
        </div>
      </div>
    </section>
  );
};

export default Career;
