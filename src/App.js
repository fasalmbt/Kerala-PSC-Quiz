import React, { useState } from 'react';
import Footer from './footer';
import { default as questions } from './questions.json';


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
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					നിങ്ങളുടെ ശരിയുത്തരങ്ങൾ: {score} / {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>ചോദ്യം {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button
								key={index}
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}
							</button>
						))}
					</div>
				</>
			)}
			<Footer />
		</div>
	);

}
