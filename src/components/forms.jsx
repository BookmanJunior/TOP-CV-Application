const dates = [
  {
    title: "Start Date",
    placeholder: " ",
    propToUpdate: "startDate",
    required: true,
  },
  {
    title: "End Date",
    placeholder: " ",
    propToUpdate: "endDate",
    required: true,
  },
];

const location = {
  title: "Location",
  placeholder: " ",
  propToUpdate: "location",
};

const bulletPoints = {
  title: "Details",
  placeholder: " ",
  propToUpdate: "details",
};

const generalForm = [
  {
    title: "First Name",
    placeholder: " ",
    propToUpdate: "firstName",
    required: true,
  },
  {
    title: "Last Name",
    placeholder: " ",
    propToUpdate: "lastName",
    required: true,
  },
  {
    title: "Email",
    placeholder: " ",
    propToUpdate: "email",
    type: "email",
    required: true,
  },
  {
    title: "Phone Number",
    placeholder: " ",
    propToUpdate: "phoneNumber",
    type: "tel",
    required: true,
  },
  {
    title: "Location",
    placeholder: " ",
    propToUpdate: "location",
    required: true,
  },
  {
    title: "Linkedin",
    propToUpdate: "linkedin",
    placeholder: " ",
    type: "url",
    required: false,
  },
  {
    title: "Github",
    propToUpdate: "github",
    placeholder: " ",
    type: "url",
    required: false,
  },
];

const educationForm = [
  {
    title: "School Name",
    placeholder: " ",
    propToUpdate: "name",
    required: true,
  },
  {
    title: "Degree",
    placeholder: " ",
    propToUpdate: "degree",
    required: true,
  },
  bulletPoints,
  ...dates,
  location,
];

const technicalSkillsForm = [
  { title: "Language/Frameworks", placeholder: " ", propToUpdate: "languages" },
  { title: "Testing/Deployment", placeholder: " ", propToUpdate: "testing" },
  { title: "Developer Tools", placeholder: " ", propToUpdate: "devTools" },
  { title: "Certifications", placeholder: " ", propToUpdate: "certifications" },
];

const experienceForm = [
  {
    title: "Company Name",
    placeholder: " ",
    propToUpdate: "name",
    required: true,
  },
  {
    title: "Job title",
    placeholder: " ",
    propToUpdate: "jobTitle",
    required: true,
  },
  bulletPoints,
  ...dates,
  location,
];

const projectForm = [
  {
    title: "Project Name",
    placeholder: " ",
    propToUpdate: "name",
    required: true,
  },
  {
    title: "Your role in the project",
    placeholder: " ",
    propToUpdate: "jobTitle",
    required: true,
  },
  {
    title: "Technologies Used",
    placeholder: " ",
    propToUpdate: "technologies",
    required: true,
  },
  bulletPoints,
  ...dates,
];

const Forms = {
  generalForm,
  educationForm,
  technicalSkillsForm,
  experienceForm,
  projectForm,
};

export default Forms;
