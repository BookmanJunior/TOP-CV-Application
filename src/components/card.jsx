import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import InputForm from "./inputCard";
import DataCard from "./dataCard";
import { updateLocalStorageData } from "./localStorage";

export default function InputCard({
  buttonTitle,
  information,
  setInformation,
  sectionForm,
  localStorageProperty,
  initialFormState = "closed",
  initialItem = null,
  expandable = true,
  title,
  containerState,
  containerIndex,
  onShow,
}) {
  const copyOfInitialItem =
    initialItem && information.filter((item) => item.id === initialItem)[0];

  const [itemsId, setItemsId] = useState({
    editItemId: initialItem,
    newItemId: null,
  });
  const [form, setActiveForm] = useState(initialFormState);
  const [copyOfExistingData, setCopy] = useState(copyOfInitialItem);
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  const isAddButtonActive = form === "closed";

  const handleSave = (e) => {
    e.preventDefault();

    setItemsId({ editItemId: null, newItemId: null });
    setActiveForm("closed");
    setLocalData({ ...localData, [localStorageProperty]: information });
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
    setInformation([
      ...information,
      { id, details: [{ id: uuid(), point: "" }] },
    ]);
    setItemsId({ ...itemsId, newItemId: id });
    setActiveForm("opened");
  };

  const handleDelete = (id) => {
    setInformation([...information.filter((key) => key.id !== id)]);
    setLocalData({ ...localData, [localStorageProperty]: information });
  };

  useEffect(() => {
    updateLocalStorageData(localStorageProperty, information);
  }, [localData]);

  useEffect(() => {
    if (initialFormState === "closed") {
      handleCancel();
    }
  }, [containerState]);

  return (
    <Container
      title={title}
      onShow={() => {
        onShow(containerIndex);
      }}
      containerState={containerState}
      containerIndex={containerIndex}
    >
      {containerIndex === containerState && (
        <div className="container-content">
          {isAddButtonActive ? (
            <DataCard
              info={information}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ) : (
            <InputForm
              information={information}
              setInformation={setInformation}
              onSubmit={handleSave}
              onCancel={handleCancel}
              sectionForm={sectionForm}
              itemsId={itemsId}
            />
          )}
        </div>
      )}
      {containerIndex === containerState && (
        <div className="container-footer">
          {!expandable && information.length <= 0 && isAddButtonActive && (
            <AddNewButton onAdd={handleAdd} title={buttonTitle} />
          )}
          {expandable && isAddButtonActive && (
            <AddNewButton onAdd={handleAdd} title={buttonTitle} />
          )}
        </div>
      )}
    </Container>
  );
}

function Container({
  children,
  containerState,
  containerIndex,
  title,
  onShow,
}) {
  return (
    <div
      className="form-section"
      aria-expanded={containerState === containerIndex}
    >
      <div className="container-header">
        <h2 className="container-title">{title}</h2>
        <button type="button" onClick={onShow}></button>
      </div>
      {children}
    </div>
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
