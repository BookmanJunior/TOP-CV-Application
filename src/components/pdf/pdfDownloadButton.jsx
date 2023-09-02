import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfOutput from "./pdfOutput";

export default function PdfDownloadButton({
  generalInformation,
  education,
  technicalSkills,
  experience,
  project,
}) {
  return (
    <PDFDownloadLink
      document={
        <PdfOutput
          generalInformation={generalInformation}
          education={education}
          technicalSkills={technicalSkills}
          experience={experience}
          project={project}
        />
      }
      fileName="cv"
    >
      {() => <button className="hover-accent">Download PDF</button>}
    </PDFDownloadLink>
  );
}
