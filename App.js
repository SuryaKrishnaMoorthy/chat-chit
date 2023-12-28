import { useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNetInfo } from "@react-native-community/netinfo";
import { getStorage } from "firebase/storage";

const Stack = createNativeStackNavigator();

//import firebase for realtime database and authentication
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

//import screens
import Start from "./components/Start";
import Chat from "./components/Chat";

export default function App() {
  const connectionStatus = useNetInfo();

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      disableNetwork(db);
      Alert.alert("Connection lost!");
    } else {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAf0XNobzYWO_PYVXqEr4lKn45H8wRQgLU",
    authDomain: "chat-chit-bb6ce.firebaseapp.com",
    projectId: "chat-chit-bb6ce",
    storageBucket: "chat-chit-bb6ce.appspot.com",
    messagingSenderId: "574379279724",
    appId: "1:574379279724:web:6d50a66a501431b0681f49",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const storage = getStorage(app);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Start"
          component={Start}
        />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
