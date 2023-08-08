function AddNewButton({ onAdd, title }) {
  return (
    <button key={title} type="button" onClick={onAdd}>
      {title}
    </button>
  );
}

function Container({ formState, className, onSubmit, children }) {
  let container;

  const isNewFormActive = formState === 1;
  const isEditFormActive = formState === 2;

  if (isNewFormActive || isEditFormActive) {
    container = (
      <form className={`form-section ${className}`} onSubmit={onSubmit}>
        {children}
      </form>
    );
  } else {
    container = <div className={`form-section ${className}`}>{children}</div>;
  }

  return container;
}

export default function Card({
  children,
  className,
  title,
  buttonTitle,
  onSubmit,
  formState,
  onAdd,
}) {
  const isAddButtonActive = formState === 0;

  return (
    <Container formState={formState} className={className} onSubmit={onSubmit}>
      <h2>{title}</h2>
      {children}
      {isAddButtonActive && <AddNewButton onAdd={onAdd} title={buttonTitle} />}
    </Container>
  );
}
