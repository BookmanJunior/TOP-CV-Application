import { useState } from "react";
import { v4 as uuid } from "uuid";
import InputCard from "./inputCard";
import DataCard from "./dataCard";

export default function Card({
  className,
  title,
  buttonTitle,
  information,
  setInformation,
  containerIndex,
  setContainerState,
  sectionForm,
  initialFormState = "closed",
  containerState = false,
  initialItem = null,
  expandable = true,
}) {
  const [itemsId, setItemsId] = useState({
    editItemId: initialItem,
    newItemId: null,
  });
  const [form, setActiveForm] = useState(initialFormState);

  const copyOfInitialItem =
    initialItem && information.filter((item) => item.id === initialItem)[0];
  const [copyOfExistingData, setCopy] = useState(copyOfInitialItem);

  const isAddButtonActive = form === "closed";

  const handleSave = (e) => {
    e.preventDefault();

    setItemsId({ editItemId: null, newItemId: null });
    setActiveForm("closed");
  };

  const handleCancel = () => {
    // check if new item was added, if cancelled remove it
    if (itemsId.newItemId) {
      setInformation([
        ...information.filter((item) => item.id !== itemsId.newItemId),
      ]);
    } else if (itemsId.editItemId) {
      // restore original state from a copy if edit was cancelled
      setInformation(
        information.map((item) => {
          if (item.id === itemsId.editItemId) {
            return { ...copyOfExistingData };
          }
          return { ...item };
        })
      );
    }
    setItemsId({ editItemId: null, newItemId: null });
    setActiveForm("closed");
  };

  const handleEdit = (editItemId) => {
    const itemToEdit = information.filter((item) => item.id === editItemId)[0];
    setItemsId({ ...itemsId, editItemId: itemToEdit.id });
    setCopy({ ...itemToEdit });
    setActiveForm("opened");
  };

  const handleAdd = () => {
    const id = uuid();
    setInformation([...information, { id }]);
    setItemsId({ ...itemsId, newItemId: id });
    setActiveForm("opened");
  };

  const handleDelete = (id) => {
    setInformation([...information.filter((key) => key.id !== id)]);
  };

  const handleOnShow = () => {
    const newContainerState = containerState ? null : containerIndex;
    setContainerState(newContainerState);
  };

  return (
    <>
      {isAddButtonActive ? (
        <DataCard
          info={information}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onEdit={handleEdit}
          expandable={expandable}
          buttonTitle={buttonTitle}
          className={className}
          containerState={containerState}
        />
      ) : (
        <InputCard
          information={information}
          setInformation={setInformation}
          onSubmit={handleSave}
          onCancel={handleCancel}
          containerState={containerState}
          sectionForm={sectionForm}
          itemsId={itemsId}
          className={className}
        />
      )}
    </>
  );
}
