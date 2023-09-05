const Textarea = ({ register, label }) => {
  return (
    <label className="flex flex-col gap-y-1">
      <span className="text-xs/loose font-extralight tracking-[2.4px]">
        Message
      </span>
      <textarea
        {...register(label)}
        name={label}
        className="px-2 py-2 text-[13px]/[1.85] font-extralight bg-inputBg h-[196px] md:h-full tablet:w-[221px] desktop:w-[292px] resize-none focus:outline-white focus:outline-1"
      ></textarea>
    </label>
  );
};

export default Textarea;
