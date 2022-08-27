import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😲": "Astonished",
  "😞": "Sad",
  "❤️": "Love",
  "😑": "annoyance",
  "😁": "beaming face with smiling eyes",
  "🙌": "raising hands",
  "🤣": "rolling on the floor laughing",
  "🤷‍♀️": "woman shrugging",
  "🤞": "crossed fingers",
  "🤦‍♀️": "woman facepalming",
  "😘": "face blowing a kiss"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Emoticon not found";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt !</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emoticons We Know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
