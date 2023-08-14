function AddNewButton({ onAdd, title }) {
  return (
    <button key={title} type="button" onClick={onAdd}>
      {title}
    </button>
  );
}

function DataContainer({ info, handleDelete, handleEdit }) {
  return (
    info.length > 0 && (
      <ul>
        {info.map((i) => (
          <li key={i.id}>
            <button type="button" onClick={() => handleEdit(i.id)}>
              {i.name}
            </button>
            <button type="button" onClick={() => handleDelete(i.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
}

function Container({
  formState,
  className,
  onSubmit,
  children,
  containerState,
}) {
  const isNewFormActive = formState === 1;
  const isEditFormActive = formState === 2;

  if (isNewFormActive || isEditFormActive) {
    return (
      <form
        className={`form-section ${className}`}
        onSubmit={onSubmit}
        aria-expanded={containerState}
      >
        {children}
      </form>
    );
  }
  return (
    <div className={`data-section ${className}`} aria-expanded={containerState}>
      {children}
    </div>
  );
}

export default function Card({
  children,
  className,
  title,
  buttonTitle,
  onSubmit,
  formState,
  infoState,
  containerState = "false",
  onShow,
  expandable,
  handleDelete,
  handleEdit,
  onAdd,
}) {
  const isAddButtonActive = formState === 0;

  return (
    <Container
      formState={formState}
      className={className}
      onSubmit={onSubmit}
      buttonTitle={buttonTitle}
      onAdd={onAdd}
      containerState={containerState}
    >
      <div className="container-header">
        <h2>{title}</h2>
        {expandable && <button type="button" onClick={onShow}></button>}
      </div>
      <div className="content">
        {isAddButtonActive ? (
          <>
            <DataContainer
              info={infoState}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
            <AddNewButton onAdd={onAdd} title={buttonTitle} />
          </>
        ) : (
          children
        )}
      </div>
    </Container>
  );
}
