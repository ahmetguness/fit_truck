import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  appIconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  appIcon: {
    height: 400,
    width: 400,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 40,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "60%",
    borderRadius: 40,
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.background,
    fontWeight: "bold",
    fontSize: 16,
  },
});