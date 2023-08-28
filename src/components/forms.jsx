const dates = [
  {
    title: "Start Date",
    placeholder: "Enter start date",
    propToUpdate: "startDate",
    required: true,
  },
  {
    title: "End Date",
    placeholder: "Enter start data",
    propToUpdate: "endDate",
    required: true,
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
    required: true,
  },
  {
    title: "Last Name",
    placeholder: "Enter Last Name",
    propToUpdate: "lastName",
    required: true,
  },
  {
    title: "Email",
    placeholder: "Enter Email",
    propToUpdate: "email",
    type: "email",
    required: true,
  },
  {
    title: "Phone Number",
    placeholder: "Enter Phone Number",
    propToUpdate: "phoneNumber",
    type: "tel",
    required: true,
  },
  {
    title: "Location",
    placeholder: "Enter Your Location",
    propToUpdate: "location",
    required: true,
  },
  {
    title: "Linkedin",
    propToUpdate: "linkedin",
    placeholder: "",
    type: "url",
    required: false,
  },
  {
    title: "Github",
    propToUpdate: "github",
    placeholder: "",
    type: "url",
    required: false,
  },
];

const educationForm = [
  {
    title: "School Name",
    placeholder: "Enter school name",
    propToUpdate: "name",
    required: true,
  },
  {
    title: "Degree",
    placeholder: "Enter degree",
    propToUpdate: "degree",
    required: true,
  },
  bulletPoints,
  ...dates,
  location,
];

const technicalSkillsForm = [
  { title: "Language/Frameworks", placeholder: "", propToUpdate: "languages" },
  { title: "Testing/Deployment", placeholder: "", propToUpdate: "testing" },
  { title: "Developer Tools", placeholder: "", propToUpdate: "devTools" },
  { title: "Certifications", placeholder: "", propToUpdate: "certifications" },
];

const experienceForm = [
  {
    title: "Company Name",
    placeholder: "Enter Company Name",
    propToUpdate: "name",
    required: true,
  },
  {
    title: "Job title",
    placeholder: "Enter Job Title",
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
    placeholder: "Enter Project Name",
    propToUpdate: "name",
    required: true,
  },
  {
    title: "Your role in the project",
    placeholder: "Enter your role",
    propToUpdate: "jobTitle",
    required: true,
  },
  {
    title: "Technologies Used",
    placeholder: "HTML, CSS, React",
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
