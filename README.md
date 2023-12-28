# Chat-Chit

## About the project

- A mobile application for chat, where the users can send messages to friends and family.

## Features

- Users can enter their name and choose a background color for the chat screen
before joining the chat.
- Displays the conversation, as well as an input field and submit button.
- Allows the user to send images and location data.
- Data gets stored online and offline.

### BUILT WITH

- React Native
- Expo
- Google Firestore Database
- Google Firebase authentication
- Gifted Chat

## To run

- Fork and clone the repo
- Run ```npm install``` in the repo
- Setup a project in firebase for storing messages, images, locations
    - Create an account in [firebase](https://firebase.google.com/) 
    - Create a project in firebase and setup Firebase Storage and Firestore Database.
    - Now, to allow uploading and downloading files to and from the storage, from whichever
    device connects to your Firebase Storage and Firestore Database set the rules. For this,  
     go to the Rules tab, change “allow read, write: if false;” to “allow read, write: if true”, and click Publish. This
- Run ```npm start``` to start 
