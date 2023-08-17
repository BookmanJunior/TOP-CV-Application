import InputField from "./inputField";
import Forms from "./forms";

export default function InputCard({
  className,
  onSubmit,
  onCancel,
  containerState,
  sectionForm,
  information,
  setInformation,
  itemsId,
}) {
  const editItem = information.filter(
    (item) => itemsId.editItemId === item.id
  )[0];

  return (
    <form
      className={`form-section ${className}`}
      onSubmit={onSubmit}
      aria-expanded={containerState}
    >
      {Forms[sectionForm].map((input) => (
        <InputField
          key={input.title}
          type={input.type ?? "text"}
          title={input.title}
          placeholder={input.placeholder}
          infoState={information}
          setInfoState={setInformation}
          propToUpdate={input.propToUpdate}
          itemId={
            itemsId.editItemId === null ? itemsId.newItemId : itemsId.editItemId
          }
          value={editItem && editItem[input.propToUpdate]}
        />
      ))}
      <button>Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
