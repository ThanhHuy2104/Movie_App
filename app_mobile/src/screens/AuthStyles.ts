import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bg: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.72)",
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  logo: {
    color: colors.primary,
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 40,
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 24,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: "#333",
    color: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 14,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "900",
  },
  switchText: {
    color: colors.text,
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
  demoText: {
    color: colors.muted,
    textAlign: "center",
    marginTop: 18,
    fontSize: 13,
  },
});