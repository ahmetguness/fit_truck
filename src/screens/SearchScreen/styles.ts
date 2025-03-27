import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: "4%",
    marginVertical: "3%",
    borderRadius: 25,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  searchBarTextInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  searchIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  productList: {
    paddingHorizontal: 15,
  },
});
