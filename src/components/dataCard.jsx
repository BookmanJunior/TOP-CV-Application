import { ReactComponent as Delete } from "../assets/delete-icon.svg";

export default function DataCard({
  info,
  onAdd,
  onDelete,
  onEdit,
  expandable,
  buttonTitle,
}) {
  return (
    <>
      {info.length > 0 && (
        <ul>
          {info.map((i) => (
            <li key={i.id}>
              <button type="button" onClick={() => onEdit(i.id)}>
                {i.name ??
                  `${i.firstName ?? "First and"} ${i.lastName ?? "Last Name"}`}
              </button>
              {expandable && (
                <button type="button" onClick={() => onDelete(i.id)}>
                  <Delete />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {expandable && <AddNewButton onAdd={onAdd} title={buttonTitle} />}
    </>
  );
}

function AddNewButton({ onAdd, title }) {
  return (
    <button
      className="add-button primary-color"
      key={title}
      type="button"
      onClick={onAdd}
    >
      {title}
    </button>
  );
}
