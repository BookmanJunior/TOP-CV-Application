import { useState } from "react";
import OutputCard from "./outputCard";
import GeneralInformation from "./generalInformation";
import EducationInformation from "./educationInformation";
import Experience from "./jobInformation";

export default function App() {
  const [information, setInformation] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      id: 0,
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

  const fullName = `${information[0].firstName} ${information[0].lastName}`;

  return (
    <>
      <div className="forms">
        <GeneralInformation
          generalInformation={information}
          setGeneralInformation={setInformation}
        />
        <EducationInformation
          information={education}
          setInformation={setEducation}
          containerState={activeContainer}
          setContainerState={setActiveContainer}
        />
        <Experience
          information={experience}
          setInformation={setExperience}
          containerState={activeContainer}
          setContainerState={setActiveContainer}
        />
      </div>
      <div className="output">
        <OutputCard
          className="general-information-card"
          title="General Information"
        >
          <p>{fullName}</p>
          <p>{information[0].email}</p>
          <p>{information[0].phoneNumber}</p>
        </OutputCard>
        <OutputCard className="education-information-card" title="Education">
          {education.length >= 1 &&
            education.map((item) => (
              <div key={item.id}>
                <p key={item.name}>{item.name}</p>
                <p key={item.degree}>{item.degree}</p>
                <p key={item.startDate}>{item.startDate}</p>
                <p key={item.endDate}>{item.endDate}</p>
              </div>
            ))}
        </OutputCard>
        <OutputCard className="experience-information-card" title="Experience">
          {experience.length >= 1 &&
            experience.map((item) => (
              <div key={item.id}>
                <p key={item.name}>{item.name}</p>
                <p key={item.jobTitle}>{item.jobTitle}</p>
                <p key={item.startDate}>{item.startDate}</p>
                <p key={item.endDate}>{item.endDate}</p>
                <p key={item.jobDescription}>{item.jobDescription}</p>
              </div>
            ))}
        </OutputCard>
      </div>
    </>
  );
}
