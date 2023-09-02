import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import garamond from "../../assets/fonts/garamond-regular.ttf";
import garamondBold from "../../assets/fonts/garamond-bold.ttf";
import garamondItalic from "../../assets/fonts/garamond-italic.ttf";
import GeneralInformationView from "./generalInformationCard";
import { OutputCard, InfoSection, RowOutputContainer } from "./outputCard";

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
  technicalSkills,
  experience,
  project,
}) {
  return (
    <Document>
      <Page style={styles.body} size="A4">
        <GeneralInformationView generalInformation={generalInformation} />
        <InfoSection info={education} title="Education" />
        <OutputCard title="Technical Skills" info={technicalSkills}>
          {technicalSkills.map((item) => (
            <View key={item.id}>
              <RowOutputContainer
                info={item.languages}
                title="Languages/Frameworks"
                key="languages"
              />
              <RowOutputContainer
                info={item.testing}
                title="Testing/Development"
                key="testing"
              />
              <RowOutputContainer
                info={item.devTools}
                title="Developer Tools"
                key="devTools"
              />
              <RowOutputContainer
                info={item.certifications}
                title="Certifications"
                key="certifications"
              />
            </View>
          ))}
        </OutputCard>
        <InfoSection info={experience} title="Experience" />
        <InfoSection info={project} title="Project" />
      </Page>
    </Document>
  );
}
