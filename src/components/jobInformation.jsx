/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./card";
import InputField from "./inputField";

const experienceForm = [
  {
    title: "Company Name",
    placeholder: "Enter Company Name",
    propToUpdate: "name",
  },
  {
    title: "Job title",
    placeholder: "Enter Job Title",
    propToUpdate: "jobTitle",
  },
  {
    title: "Start Date",
    placeholder: "Enter start date",
    propToUpdate: "startDate",
    type: "date",
  },
  {
    title: "End Date",
    placeholder: "Enter start data",
    propToUpdate: "endDate",
    type: "date",
  },
  {
    title: "Job Description",
    placeholder: "Enter Job Description",
    propToUpdate: "jobDescription",
    type: "textarea",
  },
];

export default function Experience({
  information,
  setInformation,
  containerState,
  setContainerState,
}) {
  const [itemsId, setItemsId] = useState({ editItemId: null, newItemId: null });
  const [copyOfExistingData, setCopy] = useState(null);
  const [form, setActiveForm] = useState(0);

  const handleSave = (e) => {
    e.preventDefault();

    setItemsId({ editItemId: null, newItemId: null });
    setActiveForm(0);
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
    setActiveForm(0);
  };

  const handleEdit = (eduId) => {
    const itemToEdit = information.filter((item) => item.id === eduId)[0];
    setItemsId({ ...itemsId, editItemId: itemToEdit.id });
    setCopy({ ...itemToEdit });
    setActiveForm(2);
  };

  const handleAdd = () => {
    const id = uuid();
    setInformation([...information, { id }]);
    setItemsId({ ...itemsId, newItemId: id });
    setActiveForm(1);
  };

  const handleDelete = (id) => {
    setInformation([...information.filter((key) => key.id !== id)]);
  };

  const handleOnShow = () => {
    handleCancel();
    return containerState === 2 ? setContainerState(0) : setContainerState(2);
  };

  return (
    <Card
      className="experience"
      title="Experience"
      onSubmit={handleSave}
      onAdd={handleAdd}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      infoState={information}
      formState={form}
      buttonTitle="Add Job"
      expandable={true}
      containerState={containerState === 2}
      onShow={handleOnShow}
    >
      {experienceForm.map((input) => (
        <InputField
          key={input.title}
          title={input.title}
          type={input.type ?? "text"}
          placeholder={input.placeholder}
          propToUpdate={input.propToUpdate}
          itemId={
            itemsId.editItemId === null ? itemsId.newItemId : itemsId.editItemId
          }
          value={
            itemsId.editItemId &&
            information.filter((item) => itemsId.editItemId === item.id)[0][
              input.propToUpdate
            ]
          }
          infoState={information}
          setInfoState={setInformation}
        />
      ))}
      <button>Save</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </Card>
  );
}
