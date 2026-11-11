import { Link } from "react-router-dom";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  white: "btn-white",
};

// <Button to="/mock">…</Button> renders a router link; without `to` it's a <button>.
export default function Button({ to, href, variant = "primary", size, className = "", children, ...rest }) {
  const cls = `btn ${variants[variant]} ${size === "lg" ? "btn-lg" : ""} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
