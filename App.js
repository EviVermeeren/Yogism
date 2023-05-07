import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "./screens/Start";
import Register from "./screens/Register";
import Login from "./screens/Login";
import ResetPassword from "./screens/ResetPassword";
import RoutineDetail from "./screens/RoutineDetail";
import ExerciseDetail from "./screens/ExerciseDetail";
import RoutineStart from "./screens/RoutineStart";
import Home from "./screens/Home";
import ForgotPassword from "./screens/ForgotPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RoutineDetail"
          component={RoutineDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ExerciseDetail"
          component={ExerciseDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RoutineStart"
          component={RoutineStart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 250,
    height: 159,
    marginTop: 210,
  },
});
