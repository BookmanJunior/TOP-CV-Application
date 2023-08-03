export default function Card({ children, className, title, style }) {
  return (
    <form className={`form-section ${className}`} style={style}>
      <h2>{title}</h2>
      {children}
      <button>Save</button>
    </form>
  );
}
