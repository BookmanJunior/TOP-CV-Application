import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  generalInfoContainer: {
    display: "flex",
    flexDirection: "column",
  },
  generalInfoContent: {
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    gap: 16,
    borderBottom: "1px solid #000000",
    paddingBottom: 4,
  },
  fullName: {
    fontSize: 32,
    fontWeight: "bold",
  },
  outputCardTitle: {
    paddingBlock: 10,
  },
});

export default function GeneralInformationView({ generalInformation }) {
  return (
    <View style={styles.generalInfoContainer}>
      <GeneralInformationHeader generalInformation={generalInformation} />
      <GeneralInformationContent generalInformation={generalInformation} />
    </View>
  );
}

function GeneralInformationHeader({ generalInformation }) {
  return (
    <View style={styles.fullName}>
      {generalInformation.map((item) => (
        <Text key={item.firstName}>{`${item.firstName} ${item.lastName}`}</Text>
      ))}
    </View>
  );
}

function GeneralInformationContent({ generalInformation }) {
  return (
    <View>
      {generalInformation.map((item) => (
        <View key={item.id} style={styles.generalInfoContent}>
          <Text>{item.email}</Text>
          <Text>{item.phoneNumber}</Text>
          <Text>{item.location}</Text>
        </View>
      ))}
    </View>
  );
}
