import Card from "./card";

export default function EducationInformation({
  information,
  setInformation,
  containerState,
  setContainerState,
}) {
  return (
    <Card
      className="education"
      title="Education"
      buttonTitle="Add School"
      information={information}
      setInformation={setInformation}
      containerIndex={1}
      containerState={containerState === 1}
      setContainerState={setContainerState}
      sectionForm="educationForm"
    />
  );
}
