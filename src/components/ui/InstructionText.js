import { StyleSheet, Text } from "react-native";
import Colors from "../../constant/color";

export default function IntructionText({ children, style }) {
  return <Text style={[styles.titleInput, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  titleInput: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
