import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Feed from "./screens/Feed";
import Myyoga from "./screens/Myyoga";
import Formcheck from "./screens/Formcheck";
import Profiel from "./screens/Profiel";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import Login from "./screens/Login";
import Register from "./screens/Register";
import RoutineDetail from "./screens/RoutineDetail";
import ExerciseDetail from "./screens/ExerciseDetail";
import RoutineStart from "./screens/RoutineStart";
import Notification from "./screens/Notification";
import Start from "./screens/Start";
import DetailPage from "./screens/DetailPage";
import NewPost from "./screens/NewPost";
import Search from "./screens/Search";
import ExerciseSearch from "./screens/ExerciseSearch";
import Bibliotheek from "./screens/Bibliotheek";
import BibliotheekRoutines from "./screens/BibliotheekRoutines";
import Favorites from "./screens/Favorites";
import FavoritesPoses from "./screens/FavoritesPoses";
import Settings from "./screens/Settings";
import NotificationSettings from "./screens/NotificationSettings";
import Beveiliging from "./screens/Beveiliging";
import Abonnement from "./screens/Abonnement";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
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
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="ExerciseDetail"
        component={ExerciseDetail}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="RoutineStart"
        component={RoutineStart}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <Stack.Screen
        name="NewPost"
        component={NewPost}
        options={{ headerShown: false, tabBarVisible: false }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, tabBarVisible: false }}
      />

      <Stack.Screen
        name="ExerciseSearch"
        component={ExerciseSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bibliotheek"
        component={Bibliotheek}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BibliotheekRoutines"
        component={BibliotheekRoutines}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FavoritesPoses"
        component={FavoritesPoses}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationSettings"
        component={NotificationSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Beveiliging"
        component={Beveiliging}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Abonnement"
        component={Abonnement}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Myyoga"
          component={Myyoga}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Formcheck"
          component={Formcheck}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profiel"
          component={Profiel}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
