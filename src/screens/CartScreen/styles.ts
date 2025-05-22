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
  listWrapper: {
    flex: 0.88,
  },
  separator: {
    height: 20,
  },
  cartFooter: {
    flex: 0.12,
    width: "100%",
    justifyContent: "space-evenly",
  },
  cartSummary: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cartSummaryText: {
    fontSize: 15,
  },
  clearCartButton: {
    height: 40,
    backgroundColor: "#ff4757",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  clearCartText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  confirmCartButton: {
    width: "96%",
    marginHorizontal: "2%",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
  },
  confirmCartText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});
