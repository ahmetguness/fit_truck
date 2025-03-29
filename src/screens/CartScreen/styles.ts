import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    color: "#888",
  },
  cartContainer: {
    marginHorizontal: "2%",
    marginTop: "4%",
    flex: 1,
  },
  cartSummary: {
    marginBottom: "4%",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: 20,
  },
  listWrapper: {
    // marginBottom: 150,
    flex: 0.88,
  },
  separator: {
    height: 20,
  },
  confirmButtonContainer: {
    // position: "absolute",
    // bottom: "2%",
    // width: "100%",
  },
  confirmButton: {
    width: "98%",
    backgroundColor: COLORS.primary,
    height: 45,
    marginHorizontal: "1%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmButtonText: {
    color: COLORS.background,
    fontWeight: "bold",
    fontSize: 18,
  },
});
