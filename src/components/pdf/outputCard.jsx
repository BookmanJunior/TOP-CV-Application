import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    fontSize: 12,
  },
  header: {
    fontWeight: 700,
    borderBottom: "1px solid #000000",
    paddingBottom: 4,
    marginTop: 8,
    marginBottom: 8,
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
});

export default function InfoSection({ info, title }) {
  return (
    <View style={styles.body}>
      <Header title={title} />
      {info.map((i) => (
        <View key={i.id} style={styles.container}>
          <LeftSideContainer info={i}>
            <BulletPoints info={i} />
          </LeftSideContainer>
          <RightSideContainer info={i} />
        </View>
      ))}
    </View>
  );
}

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
      <Text style={{ fontWeight: 700 }}>{info.name}</Text>
      <Text style={{ fontStyle: "italic" }}>{info.degree ?? info.job}</Text>
      {children}
    </View>
  );
}

function RightSideContainer({ info }) {
  const fullDate = `${info.startDate ?? ""} - ${info.endDate ?? ""}`;
  return (
    <View style={{ ...styles.contentContainer, alignItems: "flex-end" }}>
      <Text style={{ fontWeight: 700 }}>{fullDate}</Text>
      <Text style={{ fontStyle: "italic" }}>{info.location}</Text>
    </View>
  );
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
