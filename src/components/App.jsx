import { useState } from "react";
import {
  OutputCard,
  GenericOutputCard,
  RowOutputContainer,
} from "./outputCard";
import InputCard from "./inputCard";
import OutputHeader from "./outputHeader";
import { loadStorageData } from "./localStorage";
import PdfDownloadButton from "./pdf/pdfDownloadButton";
import Modal from "./modal";

export default function App() {
  const [information, setInformation] = useState(
    (!loadStorageData("information").length && [{ id: 1 }]) ||
      (loadStorageData("information") ?? [{ id: 1 }])
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

  const [isModalActive, setIsModalActive] = useState(false);

  const clearData = () => {
    setInformation([
      {
        id: 1,
      },
    ]);
    setEducation([]);
    setTechnicalSkills([]);
    setExperience([]);
    setProjects([]);
    localStorage.clear();
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <aside className="misc-buttons">
        <PdfDownloadButton
          generalInformation={information}
          education={education}
          experience={experience}
        />
        <button
          className="clear-btn"
          onClick={() => setIsModalActive(!isModalActive)}
        >
          Clear
        </button>
      </aside>
      <section className="input-section">
        <InputCard
          title="General Information"
          containerIndex={0}
          containerState={activeContainer}
          onShow={handleOnShow}
          information={information}
          setInformation={setInformation}
          sectionForm="generalForm"
          initialFormState="opened"
          // check if info exists, load it
          initialItem={information.length && information[0].id}
          expandable={false}
          localStorageProperty="information"
          buttonTitle="Add general information"
        />
        <InputCard
          title="Education"
          containerIndex={1}
          containerState={activeContainer}
          onShow={handleOnShow}
          buttonTitle="Add School"
          information={education}
          setInformation={setEducation}
          sectionForm="educationForm"
          localStorageProperty="education"
        />
        <InputCard
          title="Technical Skills"
          containerIndex={2}
          containerState={activeContainer}
          onShow={handleOnShow}
          buttonTitle="Add Technical Skills"
          information={technicalSkills}
          setInformation={setTechnicalSkills}
          sectionForm="technicalSkillsForm"
          localStorageProperty="technicalSkills"
          expandable={false}
        />
        <InputCard
          title="Experience"
          containerIndex={3}
          containerState={activeContainer}
          onShow={handleOnShow}
          buttonTitle="Add Job"
          information={experience}
          setInformation={setExperience}
          sectionForm="experienceForm"
          localStorageProperty="experience"
        />
        <InputCard
          title="Projects"
          containerIndex={4}
          containerState={activeContainer}
          onShow={handleOnShow}
          buttonTitle="Add Projects"
          information={projects}
          setInformation={setProjects}
          sectionForm="projectForm"
          localStorageProperty="projects"
        />
      </section>
      <section className="output-section">
        <OutputHeader generalInformation={information} />
        <GenericOutputCard title="Education" info={education} />
        <OutputCard title="Technical Skills" info={technicalSkills}>
          {technicalSkills.map((item) => (
            <div key={item.id}>
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
            </div>
          ))}
        </OutputCard>
        <GenericOutputCard title="Experience" info={experience} />
        <GenericOutputCard title="Projects" info={projects} />
      </section>
      <Modal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        cb={clearData}
      >
        <p>Are you sure you want to erase all data?</p>
      </Modal>
    </>
  );
}
