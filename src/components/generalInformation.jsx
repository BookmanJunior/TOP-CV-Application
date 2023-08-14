import InputField from "./inputField";
import Card from "./card";

export default function GeneralInformation({
  generalInformation,
  setGeneralInformation,
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

  return (
    <Card
      className="general-information"
      title="General Information"
      infoState={generalInformation}
      setInfoState={setGeneralInformation}
      formState={1}
      containerState="true"
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
