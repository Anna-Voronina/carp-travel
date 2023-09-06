const SectionTitle = ({ thinText, boldText, additionalStyles }) => {
  return (
    <h2
      className={`text-l/[1.4] tablet:text-xl desktop:text-xxl font-thin uppercase tracking-[-1.6px] tablet:tracking-[-2.68px] desktop:tracking-[-3.92px] ${
        additionalStyles ? additionalStyles : null
      }`}
    >
      <span>{thinText}</span>
      <span className="font-medium"> {boldText}</span>
    </h2>
  );
};

export default SectionTitle;
