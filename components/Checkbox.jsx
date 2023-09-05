const Checkbox = ({
  label,
  register,
  required,
  children,
  isCheckboxChecked,
  setIsCheckboxChecked,
}) => {
  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        {...register(label, { required })}
        type="checkbox"
        name={label}
        className="visually-hidden"
        id={label}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={label} className="flex gap-x-2">
        <span className="flex justify-center items-center w-6 h-6 px-1 py-1 border border-white">
          <span
            className={`block w-4 h-4 bg-white transition-opacity ${
              isCheckboxChecked ? "opacity-1" : "opacity-10"
            }`}
          ></span>
        </span>
        <span className="text-xs/loose font-extralight tablet:text-xs/[1.83] max-w-[192px] desktop:max-w-[258px]">
          I confirm my consent to the processing of personal data.
        </span>
      </label>
      {children}
    </div>
  );
};

export default Checkbox;
