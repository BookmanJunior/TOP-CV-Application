import InputField from "./inputField";
import Card from "./card";

export default function GeneralInformation({
  generalInformation,
  setGeneralInformation,
  containerState,
  setContainerState,
}) {
  const generalInformationForm = [
    {
      title: "First Name",
      placeholder: "Enter First Name",
      propToUpdate: "firstName",
    },
    {
      title: "Last Name",
      placeholder: "Enter Last Name",
      propToUpdate: "lastName",
    },
    {
      title: "Email",
      placeholder: "Enter Email",
      propToUpdate: "email",
      type: "email",
    },
    {
      title: "Phone Number",
      placeholder: "Enter Phone Number",
      propToUpdate: "phoneNumber",
      type: "tel",
    },
  ];

  const handleOnShow = () =>
    containerState === 0 ? setContainerState(null) : setContainerState(0);

  return (
    <Card
      className="general-information"
      title="General Information"
      infoState={generalInformation}
      setInfoState={setGeneralInformation}
      formState={1}
      containerState={containerState === 0}
      expandable={true}
      onShow={handleOnShow}
    >
      {generalInformationForm.map((input) => (
        <InputField
          key={input.title}
          title={input.title}
          placeholder={input.placeholder}
          infoState={generalInformation}
          setInfoState={setGeneralInformation}
          propToUpdate={input.propToUpdate}
          itemId={0}
        />
      ))}
    </Card>
  );
}
