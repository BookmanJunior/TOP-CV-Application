const generalForm = [
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

const educationForm = [
  {
    title: "School Name",
    placeholder: "Enter school name",
    propToUpdate: "name",
  },
  { title: "Degree", placeholder: "Enter degree", propToUpdate: "degree" },
  {
    title: "Start Date",
    placeholder: "Enter start date",
    propToUpdate: "startDate",
    type: "date",
  },
  {
    title: "End Date",
    placeholder: "Enter start data",
    propToUpdate: "endDate",
    type: "date",
  },
];

const experienceForm = [
  {
    title: "Company Name",
    placeholder: "Enter Company Name",
    propToUpdate: "name",
  },
  {
    title: "Job title",
    placeholder: "Enter Job Title",
    propToUpdate: "jobTitle",
  },
  {
    title: "Start Date",
    placeholder: "Enter start date",
    propToUpdate: "startDate",
    type: "date",
  },
  {
    title: "End Date",
    placeholder: "Enter start data",
    propToUpdate: "endDate",
    type: "date",
  },
  {
    title: "Job Description",
    placeholder: "Enter Job Description",
    propToUpdate: "jobDescription",
    type: "textarea",
  },
];

const Forms = {
  generalForm,
  educationForm,
  experienceForm,
};

export default Forms;
