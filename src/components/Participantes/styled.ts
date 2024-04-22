import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    marginTop: 16,
    height: 56,
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#323238",
    flexDirection: "row",
  },
  name: {
    fontSize: 16,
    color: "#fff",
    flex: 1,
    fontWeight: "bold",
    padding: 8,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: "#e25858",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    borderRadius: 5,
    fontWeight: "bold",
  },
});
