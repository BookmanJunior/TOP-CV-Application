const dates = [
  {
    title: "Start Date",
    placeholder: "Enter start date",
    propToUpdate: "startDate",
  },
  {
    title: "End Date",
    placeholder: "Enter start data",
    propToUpdate: "endDate",
  },
];

const location = {
  title: "Location",
  placeholder: "Enter Location",
  propToUpdate: "location",
};

const bulletPoints = {
  title: "Details",
  placeholder: "Enter bullet point",
  propToUpdate: "details",
};

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
  {
    title: "Location",
    placeholder: "Enter Your Location",
    propToUpdate: "location",
  },
  {
    title: "Linkedin",
    propToUpdate: "linkedin",
    placeholder: "",
    type: "url",
  },
  {
    title: "Github",
    propToUpdate: "github",
    placeholder: "",
    type: "url",
  },
];

const educationForm = [
  {
    title: "School Name",
    placeholder: "Enter school name",
    propToUpdate: "name",
  },
  { title: "Degree", placeholder: "Enter degree", propToUpdate: "degree" },
  bulletPoints,
  ...dates,
  location,
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
  bulletPoints,
  ...dates,
  location,
];

const projectForm = [
  {
    title: "Project Name",
    placeholder: "Enter Project Name",
    propToUpdate: "name",
  },
  {
    title: "Your role in the project",
    placeholder: "Enter your role",
    propToUpdate: "jobTitle",
  },
  {
    title: "Technologies Used",
    placeholder: "HTML, CSS, React",
    propToUpdate: "technologies",
  },
  bulletPoints,
  ...dates,
];

const Forms = {
  generalForm,
  educationForm,
  experienceForm,
  projectForm,
};

export default Forms;
