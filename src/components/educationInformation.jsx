import { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./card";
import InputField from "./inputField";

export default function EducationInformation({
  information,
  setInformation,
  containerState,
  setContainerState,
}) {
  const [itemId, setItemId] = useState(null);
  const [form, setActiveForm] = useState(0);
  const educationForm = [
    {
      title: "School Name",
      placeholder: "Enter school name",
      propToUpdate: "name",
    },
    { title: "Degree", placeholder: "Enter degree", propToUpdate: "degree" },
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
  ];

  const handleSave = (e) => {
    e.preventDefault();

    // let updatedInfo;

    // if (doesItemExist) {
    //   information.map((info) => {
    //     if (info.id === itemId) {
    //     }
    //   });
    // }
    // const doesSchoolExist = information.education[itemId.id];
    // let updatedEducation;

    // if (doesSchoolExist) {
    //   updatedEducation = {
    //     ...information.education,
    //     [itemId.id]: { ...itemId },
    //   };
    // } else {
    //   updatedEducation = {
    //     ...information.education,
    //     [id]: { ...itemId, id },
    //   };
    // }

    // setInformation({ ...information, education: updatedEducation });
    setItemId(null);
    setActiveForm(0);
  };

  const handleCancel = () => {
    // check if new item was added, if cancelled remove it
    setInformation(itemId && information.filter((item) => item.id !== itemId));
    setItemId(null);
    setActiveForm(0);
  };

  const handleEdit = (eduId) => {
    const schoolToEdit = information.filter((item) => item.id === eduId)[0];
    setItemId(schoolToEdit.id);
    setActiveForm(2);
  };

  const handleAdd = () => {
    const id = uuid();
    setInformation([...information, { id }]);
    setItemId(id);
    setActiveForm(1);
  };

  const handleDelete = (id) => {
    setInformation([...information.filter((key) => key.id !== id)]);
  };

  return (
    <Card
      className="education"
      title="Education"
      onSubmit={handleSave}
      onAdd={handleAdd}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      formState={form}
      buttonTitle="Add School"
      infoState={information}
      expandable={true}
      containerState={containerState === 1}
      onShow={() =>
        containerState === 1 ? setContainerState(0) : setContainerState(1)
      }
    >
      {educationForm.map((input) => (
        <InputField
          key={input.title}
          type={input.type ?? "text"}
          title={input.title}
          placeholder={input.placeholder}
          infoState={information}
          setInfoState={setInformation}
          propToUpdate={input.propToUpdate}
          itemId={itemId}
          value={
            itemId &&
            information.filter((item) => itemId === item.id)[0][
              input.propToUpdate
            ]
          }
        />
      ))}
      <button>Save</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </Card>
  );
}
