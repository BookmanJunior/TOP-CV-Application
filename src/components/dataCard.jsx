export default function DataCard({
  info,
  onAdd,
  onDelete,
  onEdit,
  onShow,
  expandable,
  buttonTitle,
  className,
  title,
  containerState,
}) {
  return (
    <div className={`data-section ${className}`} aria-expanded={containerState}>
      <div className="container-header">
        <h2 className="container-title">{title}</h2>
        <button type="button" onClick={onShow}></button>
      </div>
      <div className="container-content">
        {info.length > 0 && (
          <ul>
            {info.map((i) => (
              <li key={i.id}>
                <button type="button" onClick={() => onEdit(i.id)}>
                  {i.name ??
                    `${i.firstName ?? "First and"} ${
                      i.lastName ?? "Last Name"
                    }`}
                </button>
                {expandable && (
                  <button type="button" onClick={() => onDelete(i.id)}>
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
        {expandable && <AddNewButton onAdd={onAdd} title={buttonTitle} />}
      </div>
    </div>
  );
}

function AddNewButton({ onAdd, title }) {
  return (
    <button key={title} type="button" onClick={onAdd}>
      {title}
    </button>
  );
}
