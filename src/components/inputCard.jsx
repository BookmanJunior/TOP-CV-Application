import InputField from "./inputField";
import Forms from "./forms";

export default function InputCard({
  onSubmit,
  onCancel,
  sectionForm,
  information,
  setInformation,
  itemsId,
}) {
  const editItem = information.filter(
    (item) => itemsId.editItemId === item.id
  )[0];

  return (
    <form onSubmit={onSubmit}>
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
      <button className="save-button primary-color">Save</button>
      <button
        className="cancel-button accent-color"
        type="button"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  );
}
