const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="cursor-pointer text-[30px]/basic desktop:text-[32px] font-medium self-end"
    >
      {text}
    </button>
  );
};

export default Button;
