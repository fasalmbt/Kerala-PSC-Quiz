import React, { useState } from "react";
import Footer from "./components/Footer";
import { default as questions } from "./data/data.json";
import Swal from "sweetalert2";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      Swal.fire({
        title: "നിങ്ങളുടെ ശരിയുത്തരങ്ങൾ:",
        html: `നിങ്ങളുടെ സ്കോർ: <strong>${score} / ${questions.length}</strong>`,
        icon: "success",
      });
    }
  };

  return (
    <div className="app">
      {!showScore ? (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>ചോദ്യം: {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      ) : (
        <>
          {questions.map((question, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              <strong>{question.questionText}</strong>
              {question.answerOptions.map((option, index) => (
                <div key={index}>
                  {option.answerText}
                  {option.isCorrect ? "✅" : "❌"}
                </div>
              ))}
            </div>
          ))}
          <a href="/">
            <button>👍 GO TO QUIZ</button>
          </a>
        </>
      )}
      <Footer />
    </div>
  );
}
