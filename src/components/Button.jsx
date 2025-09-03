import { Link } from "react-router-dom";

const Button = ({ text, to, color = "dark" }) => {
  // Definimos las clases de fondo según el tema
  const bgClass =
    color === "dark" ? "bg-coyote text-alabaster" : "bg-alabaster text-coyote";

  return (
    <Link
      to={to}
      className={`${bgClass} rounded-4xl text-xl px-6 py-3 w-fit`}
    >
      {text}
    </Link>
  );
};

export default Button;
