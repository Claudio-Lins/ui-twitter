import { useState } from "react";
import { Header } from "../components/Header";
import { Separate } from "../components/Separate";
import { Tweet } from "../components/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

// const answer = ["Concordo...", "Faz todo sentido!", "Muito bom!"];

export function Status() {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState([
    "Concordo",
    "Faz todo sentido!",
    "Muito bom",
  ]);
  function createNewAnswer(event: React.FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswer("");
  }
  function handleHotKeySubmit(event: React.KeyboardEvent) {
    if (event.key === "Enter" && event.shiftKey) {
      createNewAnswer(event);
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae modi cum ex consectetur, deleniti sapiente, perferendis quo, sit corporis eveniet corrupti nostrum culpa! Veniam, officiis nobis omnis excepturi at consectetur." />
      <Separate />
      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/claudio-lins.png" alt="Claudio Lins" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight/>
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}
