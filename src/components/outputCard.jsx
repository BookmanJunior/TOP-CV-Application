export default function OutputCard({ title, className, children }) {
  return (
    <div className={`output-card ${className}`}>
      {title && <h3 className="output-card-title">{title}</h3>}
      {children}
    </div>
  );
}
