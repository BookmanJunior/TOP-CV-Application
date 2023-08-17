import Card from "./card";

export default function GeneralInformation({
  generalInformation,
  setGeneralInformation,
  containerState,
  setContainerState,
}) {
  return (
    <Card
      className="general-information"
      title="General Information"
      buttonTitle="Add School"
      information={generalInformation}
      setInformation={setGeneralInformation}
      containerIndex={0}
      containerState={containerState === 0}
      setContainerState={setContainerState}
      sectionForm="generalForm"
      initialFormState="opened"
      expandable={false}
      initialItem={1}
    />
  );
}
