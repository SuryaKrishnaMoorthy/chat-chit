import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import UserSvg from "../assets/user-icon.svg";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const hexColors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

  // set state for the background color
  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/chat-chit-background.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.appTitle}>Chat-Chit</Text>
        {/* Input box for the user */}
        <View style={styles.startForm}>
          <View style={styles.textInputContainer}>
            <View style={styles.iconUserContainer}>
              {/* SVG component using react-native-svg-transformer. Config in metro.config.js */}
              <UserSvg style={styles.iconUser} width={20} height={20} />
            </View>
            <TextInput
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder="Your Name"
            />
          </View>

          {/* Background color Buttons */}
          <View style={styles.backgroundColorContainer}>
            <Text style={styles.colorContainerText}>
              Choose Background Color:
            </Text>
            <View style={styles.colorContainer}>
              {hexColors.map((color) => (
                <View
                  key={color}
                  // Style only the selected button
                  style={
                    color === selectedColor
                      ? styles.colorButtonContainer
                      : { marginRight: 20 }
                  }
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: color,
                      borderRadius: 50,
                      margin: 3,
                    }}
                    onPress={() => handleColorPress(color)}
                  >
                    <View
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    ></View>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Start Chat Button */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: selectedColor })
            }
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 1,
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
    marginTop: "25%",
  },
  startForm: {
    width: "88%",
    padding: 15,
    backgroundColor: "#fffafa",
    justifyContent: "space-between",
    height: "44%",
    marginBottom: "10%",
  },
  textInputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 15,
  },
  iconUserContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconUser: {
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    marginRight: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.5,
  },
  backgroundColorContainer: {
    justifyContent: "space-around",
  },
  colorContainer: {
    flexDirection: "row",
  },
  colorContainerText: {
    fontSize: 18,
    color: "#757083",
    marginBottom: 15,
    fontWeight: "500",
  },
  colorButtonContainer: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#757083",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    marginRight: 15,
  },
  colorButton: {
    borderRadius: 50,
  },
  startButton: {
    backgroundColor: "#757083",
    fontSize: 16,
    fontWeight: "600",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    padding: 10,
  },
});

export default Start;
