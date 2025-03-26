import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: "5%",
  },
  appIconContainer: {
    alignItems: "center",
  },
  appIcon: {
    height: 400,
    width: 400,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 34,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "60%",
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.background,
    fontWeight: "bold",
    fontSize: 16,
  },
});
