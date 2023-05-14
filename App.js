import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";

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
import Contact from "./screens/Contact";
import FAQ from "./screens/FAQ";
import MijnGegevens from "./screens/MijnGegevens";
import GegevensWijzigen from "./screens/GegevensWijzigen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{ headerShown: false, tabBarVisible: false }}
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

      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FAQ"
        component={FAQ}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MijnGegevens"
        component={MijnGegevens}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="GegevensWijzigen"
        component={GegevensWijzigen}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#FF9C64",
          inactiveTintColor: "#212121",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={25} />,
          }}
        />
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="heart" size={25} />,
          }}
        />
        <Tab.Screen
          name="Mijn Yoga"
          component={Myyoga}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="appstore-o" size={25} />,
          }}
        />
        <Tab.Screen
          name="Formcheck"
          component={Formcheck}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="folder1" size={25} />,
          }}
        />
        <Tab.Screen
          name="Profiel"
          component={Profiel}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="user" size={25} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
