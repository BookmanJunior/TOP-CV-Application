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
  const initialGeneralInformationLoad = () => {
    if (!loadStorageData("information")) {
      return [{ id: 1 }];
    }

    if (!loadStorageData("information").length) {
      return [{ id: 1 }];
    }

    return loadStorageData("information");
  };

  const [information, setInformation] = useState(initialGeneralInformationLoad);
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
  const [isModalActive, setIsModalActive] = useState(false);
  const [isClearRequest, setIsClearRequest] = useState(false);
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  const handleOnShow = (containerIndex) => {
    setActiveContainer(
      activeContainer === containerIndex ? null : containerIndex
    );
  };

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
    setIsClearRequest(true);
  };

  return (
    <>
      <aside className="misc-buttons">
        <PdfDownloadButton
          generalInformation={information}
          education={education}
          technicalSkills={technicalSkills}
          experience={experience}
          project={projects}
        />
        <button
          className="hover-accent preview-btn"
          onClick={() => setIsPreviewActive(!isPreviewActive)}
        >
          Preview
        </button>
        <button
          className="hover-warning"
          onClick={() => setIsModalActive(!isModalActive)}
        >
          Clear
        </button>
      </aside>
      <section className="input-section">
        <InputCard
          title="General"
          containerIndex={0}
          containerState={activeContainer}
          onShow={handleOnShow}
          information={information}
          setInformation={setInformation}
          sectionForm="generalForm"
          initialFormState="opened"
          initialItem={information.length && information[0].id}
          expandable={false}
          localStorageProperty="information"
          buttonTitle="Add general information"
          clearRequest={isClearRequest}
          setClearRequest={setIsClearRequest}
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
          clearRequest={isClearRequest}
          setClearRequest={setIsClearRequest}
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
          clearRequest={isClearRequest}
          setClearRequest={setIsClearRequest}
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
          clearRequest={isClearRequest}
          setClearRequest={setIsClearRequest}
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
          clearRequest={isClearRequest}
          setClearRequest={setIsClearRequest}
        />
      </section>
      <section
        className={`output-section ${isPreviewActive && "preview-active"}`}
      >
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
      {isPreviewActive && (
        <button
          className={`exit-preview-btn hover-accent ${
            isPreviewActive && "preview-active"
          }`}
          onClick={() => setIsPreviewActive(!isPreviewActive)}
        >
          X
        </button>
      )}
      <Modal
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        cb={clearData}
      />
    </>
  );
}
