import { useState } from "react";
import OutputCard from "./outputCard";
import InputContainer from "./inputContainer";
import Card from "./card";

export default function App() {
  const [information, setInformation] = useState([
    {
      id: 1,
    },
  ]);

  const [education, setEducation] = useState([
    {
      // for testing purposes
      name: "Test University",
      degree: "Computer Science",
      startDate: "2015-01-09",
      endDate: "2019-05-05",
      id: "877364ee-2950-49f1-bc54-a6642c643b3f",
    },
  ]);

  const [experience, setExperience] = useState([]);
  const [activeContainer, setActiveContainer] = useState(0);

  const fullName = `${information[0]?.firstName ?? ""} ${
    information[0].lastName ?? ""
  }`;

  const handleOnShow = (containerIndex) => {
    setActiveContainer(
      activeContainer === containerIndex ? null : containerIndex
    );
  };

  return (
    <>
      <div className="input-section">
        <InputContainer
          className={"general-information"}
          title="General Information"
          containerIndex={0}
          containerState={activeContainer === 0}
          onShow={handleOnShow}
        >
          <Card
            information={information}
            setInformation={setInformation}
            sectionForm="generalForm"
            initialFormState="opened"
            initialItem={1}
            expandable={false}
          />
        </InputContainer>
        <InputContainer
          className={"education-information"}
          title="Education"
          containerIndex={1}
          containerState={activeContainer === 1}
          onShow={handleOnShow}
        >
          <Card
            buttonTitle="Add School"
            information={education}
            setInformation={setEducation}
            sectionForm="educationForm"
          />
        </InputContainer>
        <InputContainer
          className={"experience-information"}
          title="Experience"
          containerIndex={2}
          containerState={activeContainer === 2}
          onShow={handleOnShow}
        >
          <Card
            buttonTitle="Add Job"
            information={experience}
            setInformation={setExperience}
            sectionForm="experienceForm"
          />
        </InputContainer>
      </div>
      <div className="output-section">
        <OutputCard className="general-information-card">
          <h1>{fullName && fullName}</h1>
          <div className="general-info">
            <p>{information[0].email}</p>
            <p>{information[0].phoneNumber}</p>
            <p>{information[0].location}</p>
          </div>
        </OutputCard>
        <OutputCard className="education-information-card" title="Education">
          {education.length >= 1 &&
            education.map((item) => (
              <div key={item.id} className="output-card-content">
                <h4 key={item.name}>{item.name}</h4>
                <p key={item.degree}>{item.degree}</p>
                {item.startDate && (
                  <h4 className="full-date">{`${item.startDate ?? ""} - ${
                    item.endDate ?? ""
                  }`}</h4>
                )}
                <p className="location-info" key={item.location}>
                  {item.location}
                </p>
              </div>
            ))}
        </OutputCard>
        <OutputCard className="experience-information-card" title="Experience">
          {experience.length >= 1 &&
            experience.map((item) => (
              <div key={item.id} className="output-card-content">
                <h4 key={item.name}>{item.name}</h4>
                <p key={item.jobTitle}>{item.jobTitle}</p>
                {item.startDate && (
                  <h4 className="full-date">{`${item.startDate ?? ""} - ${
                    item.endDate ?? ""
                  }`}</h4>
                )}
                <p className="location-info" key={item.location}>
                  {item.location}
                </p>
                <p key={item.jobDescription}>{item.jobDescription}</p>
              </div>
            ))}
        </OutputCard>
      </div>
    </>
  );
}
