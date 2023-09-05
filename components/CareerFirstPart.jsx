import { advantagesList } from "@data";
import CareerTopPart from "./CareerTopPart";

const CareerFirstPart = () => {
  return (
    <div className="mobile:section-container mobile:career-bg">
      <div className="md:hidden flex flex-col gap-y-6 mb-9">
        <CareerTopPart />
      </div>
      <div className="flex flex-col gap-y-9 tablet:max-w-[225px] tablet:gap-y-14 desktop:gap-y-[45px]">
        <h3 className="self-end desktop:self-start mobile:pr-[10px] desktop:pl-[120px] text-[30px]/basic desktop:text-4xl/[1.08] font-extralight uppercase">
          Why us ?
        </h3>
        <ul className="flex flex-col gap-y-4 tablet:gap-y-6 max-w-[181px] tablet:max-w-[225px] desktop:max-w-full text-right">
          {advantagesList.map(({ id, title, description }) => (
            <li
              key={id}
              className="flex flex-col desktop:flex-row gap-y-2 desktop:gap-x-6"
            >
              <h4 className="text-s/[1.43] font-normal tablet:text-m/5 desktop:text-ms/[1.33] desktop:text-right desktop:w-2/4">
                {title}
              </h4>
              <p className="text-xs/[1.67] desktop:text-xs/loose font-extralight desktop:w-2/4 desktop:text-justify">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerFirstPart;
