import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MessengerChat } from "react-messenger-chat-plugin";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MessengerChat
      pageId="106392365544446"
      language="en_GB"
      themeColor={"#5385A3"}
      bottomSpacing={10}
      loggedInGreeting="Logged In Voyager"
      loggedOutGreeting="Logged Out Voyager"
      greetingDialogDisplay={"show"}
      debugMode={true}
      onMessengerShow={() => {
        console.log("onMessengerShow");
      }}
      onMessengerHide={() => {
        console.log("onMessengerHide");
      }}
      onMessengerDialogShow={() => {
        console.log("onMessengerDialogShow");
      }}
      onMessengerDialogHide={() => {
        console.log("onMessengerDialogHide");
      }}
      onMessengerMounted={() => {
        console.log("onMessengerMounted");
      }}
      onMessengerLoad={() => {
        console.log("onMessengerLoad");
      }}
    />
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
