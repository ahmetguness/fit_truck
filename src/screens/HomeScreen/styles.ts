import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  navbarContainer: {
    width: "100%",
    height: "8%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  navbarTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.background,
  },
  flatlistContainer: {
    marginTop: "4%",
    marginHorizontal: "2%",
  },
  productListContainer: {
    flex: 1,
    marginHorizontal: "2%",
    marginTop: "4%",
  },
});
