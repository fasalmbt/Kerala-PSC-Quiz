import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import questions from "./data/data.json";

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      Swal.fire({
        title: "🎉 Your Score",
        html: `<strong>${score} / ${questions.length}</strong>`,
        icon: "success",
        confirmButtonText: "Retry",
        confirmButtonColor: "#4CAF50",
      }).then(() => window.location.reload());
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
        backdropFilter: "blur(15px)",
      }}
    >
      <Card
        className="w-full max-w-2xl p-6 rounded-xl shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {!showScore ? (
          <>
            <div className="mb-6 text-white">
              <h2 className="text-xl font-semibold mb-2">
                📖 Question {currentQuestion + 1} / {questions.length}
              </h2>
              <p className="text-lg">{questions[currentQuestion].questionText}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  className="bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200"
                >
                  {answerOption.answerText}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <>
            {questions.map((question, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-400 rounded-lg text-white">
                <strong className="text-lg">{question.questionText}</strong>
                <div className="mt-2 space-y-1">
                  {question.answerOptions.map((option, i) => (
                    <p
                      key={i}
                      className={`p-2 rounded-lg ${
                        option.isCorrect ? "bg-green-600" : "bg-red-600"
                      }`}
                    >
                      {option.answerText} {option.isCorrect ? "✅" : "❌"}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <Button
              onClick={() => window.location.reload()}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
            >
              🔄 Retry Quiz
            </Button>
          </>
        )}
      </Card>
    </div>
  );
}
