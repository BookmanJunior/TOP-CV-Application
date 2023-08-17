import Card from "./card";

export default function Experience({
  information,
  setInformation,
  containerState,
  setContainerState,
}) {
  return (
    <Card
      className="experience"
      title="Experience"
      buttonTitle="Add Job"
      information={information}
      setInformation={setInformation}
      containerIndex={2}
      containerState={containerState === 2}
      setContainerState={setContainerState}
      sectionForm="experienceForm"
    />
  );
}
