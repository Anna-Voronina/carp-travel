import CareerForm from "./CareerForm";

const CareerSecondPart = () => {
  return (
    <div className="mobile:section-container mobile:career-bg flex flex-col gap-y-6 tablet:gap-y-8 desktop:gap-y-[14px] tablet:mt-[93px]">
      <p className="text-xs/[1.43] tablet:text-[13px]/[1.54] desktop:text-ms/[1.33] font-extralight max-w-[150px] tablet:max-w-[221px] desktop:max-w-[235px] mobile:self-end">
        <span>Don't miss your opportunity!</span>
        <br />
        <span>Fill out the form right now and join our team!</span>
      </p>
      <CareerForm />
    </div>
  );
};

export default CareerSecondPart;
