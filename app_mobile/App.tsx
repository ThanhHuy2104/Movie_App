

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthScreen from "./src/screens/AuthScreen";
import { User } from "./src/types";
import { colors } from "./src/constants/colors";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  if(!currentUser) {
    return (
      <AuthScreen onLoginSuccess={setCurrentUser}/>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light'/>
      <Text style={styles.text}>Hello, {currentUser.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
});