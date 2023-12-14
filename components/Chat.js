import { useState, useEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
  const [messages, setMessages] = useState([]);
  const { name, color, userID } = route.params;

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsubMessages = onSnapshot(q, (documentsSnapshot) => {
      let newMessages = [];
      documentsSnapshot.forEach((doc) => {
        newMessages.push({
          uid: userID,
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        });
      });
      setMessages(newMessages);
    });
    // Sets the title on the header of the screen
    navigation.setOptions({ title: name });

    // Clean up code
    return () => {
      if (unsubMessages) unsubMessages();
    };
  }, []);

  //add new message to the db
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userID,
          username: name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
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
