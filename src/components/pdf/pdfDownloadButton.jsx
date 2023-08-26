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
      {({ loading }) => !loading && <button>Download PDF</button>}
    </PDFDownloadLink>
  );
}
