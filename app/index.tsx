import { Link, useRouter } from "expo-router";
import { Button, Text, View,StyleSheet, Platform } from "react-native";

const router = useRouter();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});

export default function Index() {
  return (    
    
  
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="./about">About</Link>

      <Button
        title="Go to Details"
        onPress={() => router.push('/home')}
      />
    </View>
  );
  
}