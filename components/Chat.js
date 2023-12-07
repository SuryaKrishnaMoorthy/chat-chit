import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Chat = ({ route, navigation }) => {
  const { name, color } = route.params;

  useEffect(() => {
    // Sets the title on the header of the screen
    navigation.setOptions({ title: name });
  }, []);

  return (
    <View style={{ backgroundColor: color, ...styles.container }}>
      <Text style={{ color: "#ffffff", fontSize: 18 }}>Welcome {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Chat;
