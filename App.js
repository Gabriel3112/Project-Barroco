import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
import MDIcon from "react-native-vector-icons/MaterialCommunityIcons";
MDIcon.loadFont();
import HistoricalContext from "./src/Screens/HistoricalContext";
import Artists from "./src/Screens/Artists";
import WorksOfArt from "./src/Screens/WorksOfArt";
import Content from "./src/Components/Content";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackHistoricalContext = ({ route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return (
    <Stack.Navigator headerMode={routeName === "Conteúdo" ? "screen" : "none"}>
      <Stack.Screen name="Contexto Histórico" component={HistoricalContext} />
      <Stack.Screen name="Conteúdo" component={Content} />
    </Stack.Navigator>
  );
};

const StackArtists = ({ route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return (
    <Stack.Navigator headerMode={routeName === "Conteúdo" ? "screen" : "none"}>
      <Stack.Screen name="Artistas" component={Artists} />
      <Stack.Screen name="Conteúdo" component={Content} />
    </Stack.Navigator>
  );
};

const StackWorksOfArt = ({ route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return (
    <Stack.Navigator headerMode={routeName === "Conteúdo" ? "screen" : "none"}>
      <Stack.Screen name="Obras" component={WorksOfArt} />
      <Stack.Screen name="Conteúdo" component={Content} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "#dedede",
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Contexto Histórico"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerTabButton}>
              <MDIcon
                name="book-open-variant"
                size={focused ? 30 : 25}
                color={focused ? "#262626" : "#7a7a7a"}
              />
              <Text
                style={{ color: focused ? "#262626" : "#7a7a7a", fontSize: 10 }}
              >
                Contexto Hitórico
              </Text>
            </View>
          ),
        }}
        component={StackHistoricalContext}
      />
      <Tab.Screen
        name="Artistas"
        component={StackArtists}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerTabButton}>
              <MDIcon
                name="account"
                size={focused ? 30 : 25}
                color={focused ? "#262626" : "#7a7a7a"}
              />
              <Text
                style={{ color: focused ? "#262626" : "#7a7a7a", fontSize: 10 }}
              >
                Artistas
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Obras de Arte"
        component={StackWorksOfArt}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerTabButton}>
              <MDIcon
                name="brush"
                size={focused ? 30 : 25}
                color={focused ? "#262626" : "#7a7a7a"}
              />
              <Text
                style={{ color: focused ? "#262626" : "#7a7a7a", fontSize: 10 }}
              >
                Obras
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#696969",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  containerTabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});
