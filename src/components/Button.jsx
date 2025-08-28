import { Link } from "react-router-dom";

const Button = ({ text, to, color = "dark" }) => {
  // Definimos las clases de fondo según el tema
  const bgClass =
    color === "dark" ? "bg-coyote text-alabaster" : "bg-alabaster text-coyote";

  return (
    <Link
      to={to}
      className={`${bgClass} rounded-4xl px-4 py-2`}
    >
      {text}
    </Link>
  );
};

export default Button;
