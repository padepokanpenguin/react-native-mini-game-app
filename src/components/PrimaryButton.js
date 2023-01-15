import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnercontainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
