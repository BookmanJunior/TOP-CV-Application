export default function Card({ children, className, title, onSubmit }) {
  return (
    <form className={`form-section ${className}`} onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
    </form>
  );
}
