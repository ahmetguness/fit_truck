import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  navbarContainer: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
