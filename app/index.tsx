import { Button, Text, View, StyleSheet, Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./home";

//const router = useRouter();
const Stack = createNativeStackNavigator();


export default function Index() {
  return (    
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}