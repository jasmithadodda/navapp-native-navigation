import { Text, View, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  bigBlue: {
    color: Platform.OS === "ios" ? "blue" : "red",
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default function Home() {
  return (
    <View>
      <Text style={styles.bigBlue}>Home screen</Text>
    </View>
  );
}