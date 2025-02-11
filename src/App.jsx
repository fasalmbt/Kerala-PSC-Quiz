import React, { useState } from "react";
import Footer from "./components/Footer";
import questions from "./data/data.json";
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
        title: "🎉 Your Score",
        html: `<strong>${score} / ${questions.length}</strong>`,
        icon: "success",
        confirmButtonText: "Retry",
        confirmButtonColor: "#4CAF50",
      }).then(() => window.location.reload());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {!showScore ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                📖 Question {currentQuestion + 1} / {questions.length}
              </h2>
              <p className="text-lg">{questions[currentQuestion].questionText}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {questions.map((question, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-600 rounded-lg">
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
            <button
              onClick={() => window.location.reload()}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
            >
              🔄 Retry Quiz
            </button>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
