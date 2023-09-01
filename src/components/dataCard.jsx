import { ReactComponent as Delete } from "../assets/delete-icon.svg";

export default function DataCard({ info, onDelete, onEdit }) {
  return (
    <>
      {info.length > 0 && (
        <ul>
          {info.map((i) => {
            const fullName = `${i.firstName ?? "Edit"} ${
              i.lastName ?? "Details"
            }`;
            return (
              <li key={i.id}>
                <button type="button" onClick={() => onEdit(i.id)}>
                  {i.name ?? fullName}
                </button>
                <button type="button" onClick={() => onDelete(i.id)}>
                  <Delete />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
