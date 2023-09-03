import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    fontSize: 12,
  },
  header: {
    fontSize: 14,
    fontWeight: 700,
    borderBottom: "1px solid #000000",
    paddingBottom: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
  },
  bulletPoints: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});

function OutputCard({ title, info, children }) {
  return (
    <View style={styles.body}>
      {info.length > 0 && <Header title={title} />}
      {children}
    </View>
  );
}
function InfoSection({ info, title }) {
  return (
    <OutputCard style={styles.body} info={info} title={title}>
      {info.map((i) => (
        <View key={i.id} style={styles.container}>
          <LeftSideContainer info={i}>
            <BulletPoints info={i} />
          </LeftSideContainer>
          <RightSideContainer info={i} />
        </View>
      ))}
    </OutputCard>
  );
}

function RowOutputContainer({ info, title }) {
  return (
    <View style={styles.rowContainer}>
      {info && <BoldParagraph>{title}</BoldParagraph>}
      <Text>{info}</Text>
    </View>
  );
}

export { OutputCard, InfoSection, RowOutputContainer };

function Header({ title = "" }) {
  return (
    title && (
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
    )
  );
}

function LeftSideContainer({ info, children }) {
  return (
    <View style={styles.contentContainer}>
      <BoldParagraph>{info.name}</BoldParagraph>
      <ItalicParagraph>{info.degree ?? info.jobTitle}</ItalicParagraph>
      {children}
    </View>
  );
}

function RightSideContainer({ info }) {
  const fullDate = `${info.startDate ?? ""} - ${info.endDate ?? ""}`;
  return (
    <View style={{ ...styles.contentContainer, alignItems: "flex-end" }}>
      <BoldParagraph>
        {(info.startDate && fullDate) || (info.endDate && fullDate)}
      </BoldParagraph>
      <ItalicParagraph>{info.location ?? info.technologies}</ItalicParagraph>
    </View>
  );
}

function BoldParagraph({ children }) {
  return <Text style={{ fontWeight: 700 }}>{children}</Text>;
}

function ItalicParagraph({ children }) {
  return <Text style={{ fontStyle: "italic" }}>{children}</Text>;
}

function BulletPoints({ info }) {
  return info.details.map(
    (bulletPoint) =>
      bulletPoint.point && (
        <View key={bulletPoint.id} style={styles.bulletPoints}>
          <Text>•</Text>
          <Text>{bulletPoint.point}</Text>
        </View>
      )
  );
}
