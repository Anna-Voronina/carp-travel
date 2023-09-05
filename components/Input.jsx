"use client";

import { useState } from "react";

const Input = ({
  type,
  text,
  label,
  placeholder,
  required,
  register,
  children,
  error,
  pattern,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  return (
    <label className="relative flex flex-col gap-y-1">
      <span
        className={`text-xs/loose font-extralight tracking-[2.4px] ${
          error ? "text-errorText" : "text-white"
        }`}
      >
        {text}
      </span>
      <input
        {...register(label, { required, pattern: pattern ? pattern : null })}
        type={type}
        placeholder={placeholder}
        onFocus={handleInputFocus}
        className={`text-[13px]/[1.85] desktop:text-[20px]/basic font-extralight  ${
          isFocused ? "bg-btnBg" : "bg-inputBg"
        }  h-6 tablet:w-[223px] desktop:h-[28px] desktop:w-[290px] px-2 placeholder:text-[13px]/[1.85] placeholder:desktop:text-[20px]/basic ${
          error ? "placeholder:text-errorText" : "text-white"
        } placeholder:opacity-20 focus:outline-white focus:outline-1`}
      />
      {children}
    </label>
  );
};

export default Input;
