import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfOutput from "./pdfOutput";

export default function PdfDownloadButton({
  generalInformation,
  education,
  experience,
}) {
  return (
    <PDFDownloadLink
      document={
        <PdfOutput
          generalInformation={generalInformation}
          education={education}
          experience={experience}
        />
      }
      fileName="cv"
    >
      {() => <button className="download-btn">Download PDF</button>}
    </PDFDownloadLink>
  );
}
