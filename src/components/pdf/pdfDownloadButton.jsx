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
      className="hover-accent"
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
      {() => "Download PDF"}
    </PDFDownloadLink>
  );
}
