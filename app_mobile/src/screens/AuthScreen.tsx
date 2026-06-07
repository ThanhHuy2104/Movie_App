import { useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { User } from "../types/index";
import { defaultUser } from "../constants/users";
import { movies } from "../constants/movies";
import { styles } from "./AuthStyles";

type AuthScreenProps = {
  onLoginSuccess: (user: User) => void;
};

export default function AuthScreen({ onLoginSuccess }: AuthScreenProps) {
  const [users, setUsers] = useState<User[]>(defaultUser);

  const [isLoginMode, setIsLoginMode] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("huynhthanhhuy.ag667@gmail.com");
  const [password, setPassword] = useState("12345");

  const heroMovie = movies[0];

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    const foundUser = users.find((user) => {
      user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password;
    });

    if (!foundUser) {
      Alert.alert("Error", "Invalid email or password");
      return;
    }

    onLoginSuccess(foundUser);
    resetForm();
  };

  const handleRegister = () => {
    if (name.length == 0 || email.length == 0 || password.length == 0) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const emailExists = users.some((user) => {
      user.email.toLowerCase() === email.toLowerCase();
    });

    if (emailExists) {
      Alert.alert("Error", "email already exists");
    }

    const newUser: User = {
      name,
      email,
      password,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    onLoginSuccess(newUser);
    resetForm();
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    resetForm();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <ImageBackground source={{ uri: heroMovie.banner }} style={styles.bg}>
        <View style={styles.overlay}>
          <Text style={styles.logo}>MOVIE</Text>
          <Text style={styles.title}>
            {isLoginMode ? "Sign In" : "Sign Up"}
          </Text>

          {!isLoginMode && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Pressable
            style={styles.button}
            onPress={isLoginMode ? handleLogin : handleRegister}
          >
            <Text style={styles.buttonText}>
              {isLoginMode ? "Login" : "Register"}
            </Text>
          </Pressable>

          <Pressable onPress={toggleMode}>
            <Text style={styles.switchText}>
                {isLoginMode ? 
                "Don't have an account? Register"
                : "Already have an account? Login"}
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
