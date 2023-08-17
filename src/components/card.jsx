import { useState } from "react";
import { v4 as uuid } from "uuid";
import InputField from "./inputField";
import Forms from "./forms";

function AddNewButton({ onAdd, title }) {
  return (
    <button key={title} type="button" onClick={onAdd}>
      {title}
    </button>
  );
}

function DataContainer({
  info,
  handleDelete,
  handleEdit,
  expandable,
  handleAdd,
  buttonTitle,
}) {
  return (
    <>
      {info.length > 0 && (
        <ul>
          {info.map((i) => (
            <li key={i.id}>
              <button type="button" onClick={() => handleEdit(i.id)}>
                {i.name ??
                  `${i.firstName ?? "First and"} ${i.lastName ?? "Last Name"}`}
              </button>
              {expandable && (
                <button type="button" onClick={() => handleDelete(i.id)}>
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {expandable && <AddNewButton onAdd={handleAdd} title={buttonTitle} />}
    </>
  );
}

function Container({
  formState,
  className,
  onSubmit,
  onCancel,
  children,
  containerState,
}) {
  const isFormOpen = formState === "opened";

  if (isFormOpen) {
    return (
      <form
        className={`form-section ${className}`}
        onSubmit={onSubmit}
        aria-expanded={containerState}
      >
        {children}
        <button>Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
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
  const editItem = information.filter(
    (item) => itemsId.editItemId === item.id
  )[0];

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
    <Container
      formState={form}
      className={className}
      onSubmit={handleSave}
      buttonTitle={buttonTitle}
      containerState={containerState}
      onCancel={handleCancel}
    >
      <div className="container-header">
        <h2>{title}</h2>
        <button type="button" onClick={handleOnShow}></button>
      </div>
      <div className="content">
        {isAddButtonActive ? (
          <DataContainer
            info={information}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            expandable={expandable}
            buttonTitle={buttonTitle}
            handleAdd={handleAdd}
          />
        ) : (
          Forms[sectionForm].map((input) => (
            <InputField
              key={input.title}
              type={input.type ?? "text"}
              title={input.title}
              placeholder={input.placeholder}
              infoState={information}
              setInfoState={setInformation}
              propToUpdate={input.propToUpdate}
              itemId={
                itemsId.editItemId === null
                  ? itemsId.newItemId
                  : itemsId.editItemId
              }
              value={editItem && editItem[input.propToUpdate]}
            />
          ))
        )}
      </div>
    </Container>
  );
}
