export default function OutputCard({ title, className, children }) {
  return (
    <div className={`output-card ${className}`}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
