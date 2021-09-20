import "./Button.css";
interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button = (props: ButtonProps) => {
  const { children, onClick, type } = props;

  console.log(children);
  return (
    <div>
      <button className="ButtonComplete" type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
export default Button;
