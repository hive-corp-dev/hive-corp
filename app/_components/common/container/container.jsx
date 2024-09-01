export default function Container({ children, className }) {
  return <div className={`comp-container ${className ? className : ""}`}>{children}</div>;
}
