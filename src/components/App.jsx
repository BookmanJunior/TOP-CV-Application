import { useState } from "react";
import OutputCard from "./outputCard";
import InputContainer from "./inputContainer";
import Card from "./card";
import OutputHeader from "./outputHeader";

export default function App() {
  const loadStorageData = (key) => {
    const data = JSON.parse(localStorage.getItem("userInfo"));
    return data?.[key];
  };

  const [information, setInformation] = useState(
    loadStorageData("information") ?? [
      {
        id: 1,
      },
    ]
  );

  const [education, setEducation] = useState(
    loadStorageData("education") ?? []
  );

  const [experience, setExperience] = useState(
    loadStorageData("experience") ?? []
  );
  const [projects, setProjects] = useState(loadStorageData("projects") ?? []);
  const [activeContainer, setActiveContainer] = useState(0);

  localStorage.setItem(
    "userInfo",
    JSON.stringify({ information, education, experience, projects })
  );

  const handleOnShow = (containerIndex) => {
    setActiveContainer(
      activeContainer === containerIndex ? null : containerIndex
    );
  };

  return (
    <>
      <section className="input-section">
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
        <InputContainer
          className="project-information"
          title="Projects"
          containerIndex={3}
          containerState={activeContainer === 3}
          onShow={handleOnShow}
        >
          <Card
            buttonTitle="Add Projects"
            information={projects}
            setInformation={setProjects}
            sectionForm="projectForm"
          />
        </InputContainer>
      </section>
      <section className="output-section">
        <OutputHeader generalInformation={information} />
        <OutputCard title="Education" info={education} />
        <OutputCard title="Experience" info={experience} />
        <OutputCard title="Projects" info={projects} />
      </section>
    </>
  );
}
