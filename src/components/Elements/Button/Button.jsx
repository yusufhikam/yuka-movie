const Button = (props) => {
  const {
    children = "...",
    variant = "bg-red-500",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button type={type} className={`${variant} p-2`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
