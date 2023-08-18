export default function InputContainer({
  containerState,
  containerIndex,
  onShow,
  title,
  className,
  children,
}) {
  return (
    <div className={`${className} form-section`} aria-expanded={containerState}>
      <div className="container-header">
        <h2 className="container-title">{title}</h2>
        <button type="button" onClick={() => onShow(containerIndex)}></button>
      </div>
      <div className="container-content">{children}</div>
    </div>
  );
}
