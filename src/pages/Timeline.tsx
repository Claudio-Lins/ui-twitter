import React, { useState } from "react";
import { Header } from "../components/Header";
import { Separate } from "../components/Separate";
import { Tweet } from "../components/Tweet";

import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState([
    "Meu primeiro tweet",
    "Meu segundo tweet",
    "Meu terceiro tweet",
  ]);
  function createNewTweet(event: React.FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit(event: React.KeyboardEvent) {
    if (event.key === "Enter" && event.shiftKey) {
      createNewTweet(event);
    }
  }
  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/claudio-lins.png" alt="Claudio Lins" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            onKeyDown={handleHotKeySubmit}
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separate />
      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}
