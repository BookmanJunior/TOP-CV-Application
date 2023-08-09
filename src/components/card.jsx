function AddNewButton({ onAdd, title }) {
  return (
    <button key={title} type="button" onClick={onAdd}>
      {title}
    </button>
  );
}

function DisplayInputData({ info, handleDelete, handleEdit }) {
  return (
    info && (
      <ul>
        {Object.values(info).map((i) => (
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
  onAdd,
  buttonTitle,
}) {
  const isNewFormActive = formState === 1;
  const isEditFormActive = formState === 2;

  let container;

  if (isNewFormActive || isEditFormActive) {
    container = (
      <form className={`form-section ${className}`} onSubmit={onSubmit}>
        {children}
      </form>
    );
  } else {
    container = (
      <div className={`form-section ${className}`}>
        {children}
        <AddNewButton onAdd={onAdd} title={buttonTitle} />
      </div>
    );
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
  infoState,
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
    >
      <h2>{title}</h2>
      {isAddButtonActive ? (
        <>
          <DisplayInputData
            info={infoState}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </>
      ) : (
        children
      )}
    </Container>
  );
}
