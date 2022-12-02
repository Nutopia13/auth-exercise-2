import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const {request, promptAsync, loading } = useAuth();

  return (
    <View>
      <Text>{loading ? "loading...." : "Login to The App"}</Text>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
