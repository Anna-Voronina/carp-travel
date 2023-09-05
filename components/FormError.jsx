import Image from "next/image";
import errorIcon from "../public/assets/icons/error.svg";

const FormError = ({ text }) => {
  return (
    <div className="absolute bottom-[-20px] right-0 flex justify-end gap-x-1 text-errorText">
      <Image src={errorIcon} width={18} height={18} alt="validation error" />
      <p className="text-[10px]/loose font-extralight tracking-[2.4px]">
        {text}
      </p>
    </div>
  );
};

export default FormError;
