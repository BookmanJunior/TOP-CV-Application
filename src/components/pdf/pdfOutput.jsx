import { Page, Document, StyleSheet, Font } from "@react-pdf/renderer";
import garamond from "../../assets/fonts/garamond-regular.ttf";
import garamondBold from "../../assets/fonts/garamond-bold.ttf";
import garamondItalic from "../../assets/fonts/garamond-italic.ttf";
import GeneralInformationView from "./generalInformationCard";
import InfoSection from "./outputCard";

Font.register({
  family: "Garamond",
  fonts: [
    { src: garamond },
    { src: garamondBold, fontWeight: 700 },
    { src: garamondItalic, fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 16,
    fontFamily: "Garamond",
  },
});

export default function PdfOutput({
  generalInformation,
  education,
  experience,
}) {
  return (
    <Document>
      <Page style={styles.body} size="A4">
        <GeneralInformationView generalInformation={generalInformation} />
        <InfoSection info={experience} title="Experience" />
        <InfoSection info={education} title="Education" />
      </Page>
    </Document>
  );
}
