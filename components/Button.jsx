const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className="cursor-pointer text-[30px]/basic desktop:text-[32px] font-medium self-end hover:scale-110 focus:scale-110 transition-transform"
    >
      {text}
    </button>
  );
};

export default Button;
