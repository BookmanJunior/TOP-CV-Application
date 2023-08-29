import { useState } from "react";
import {
  OutputCard,
  GenericOutputCard,
  RowOutputContainer,
} from "./outputCard";
import InputContainer from "./inputContainer";
import Card from "./card";
import OutputHeader from "./outputHeader";
import { loadStorageData } from "./localStorage";

export default function App() {
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

  const [technicalSkills, setTechnicalSkills] = useState(
    loadStorageData("technicalSkills") ?? []
  );

  const [experience, setExperience] = useState(
    loadStorageData("experience") ?? []
  );
  const [projects, setProjects] = useState(loadStorageData("projects") ?? []);
  const [activeContainer, setActiveContainer] = useState(0);

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
            localStorageProperty="information"
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
            localStorageProperty="education"
          />
        </InputContainer>
        <InputContainer
          className={"technical-skills"}
          title="Technical Skills"
          containerIndex={2}
          containerState={activeContainer === 2}
          onShow={handleOnShow}
        >
          <Card
            buttonTitle="Add Technical Skills"
            information={technicalSkills}
            setInformation={setTechnicalSkills}
            sectionForm="technicalSkillsForm"
            localStorageProperty="technicalSkills"
          />
        </InputContainer>
        <InputContainer
          className={"experience-information"}
          title="Experience"
          containerIndex={3}
          containerState={activeContainer === 3}
          onShow={handleOnShow}
        >
          <Card
            buttonTitle="Add Job"
            information={experience}
            setInformation={setExperience}
            sectionForm="experienceForm"
            localStorageProperty="experience"
          />
        </InputContainer>
        <InputContainer
          className="project-information"
          title="Projects"
          containerIndex={4}
          containerState={activeContainer === 4}
          onShow={handleOnShow}
        >
          <Card
            buttonTitle="Add Projects"
            information={projects}
            setInformation={setProjects}
            sectionForm="projectForm"
            localStorageProperty="projects"
          />
        </InputContainer>
      </section>
      <section className="output-section">
        <OutputHeader generalInformation={information} />
        <GenericOutputCard title="Education" info={education} />
        <OutputCard title="Technical Skills" info={technicalSkills}>
          {technicalSkills.map((item) => (
            <>
              <RowOutputContainer
                info={item.languages}
                title="Languages/Frameworks"
                key="languages"
              />
              <RowOutputContainer
                info={item.testing}
                title="Testing/Development"
                key="testing"
              />
              <RowOutputContainer
                info={item.devTools}
                title="Developer Tools"
                key="devTools"
              />
              <RowOutputContainer
                info={item.certifications}
                title="Certifications"
                key="certifications"
              />
            </>
          ))}
        </OutputCard>
        <GenericOutputCard title="Experience" info={experience} />
        <GenericOutputCard title="Projects" info={projects} />
      </section>
    </>
  );
}
