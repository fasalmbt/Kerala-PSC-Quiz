import React, { useState } from 'react';
import Footer from './footer';

export default function App() {
	const questions = [
		{
			questionText: 'കേരളത്തിൽ എത്ര ഗ്രാമപഞ്ചായത്തുകൾ ഉണ്ട്?',
			answerOptions: [
				{ answerText: '940', isCorrect: false },
				{ answerText: '941', isCorrect: true },
				{ answerText: '942', isCorrect: false },
				{ answerText: '943', isCorrect: false },
			],
		},
		{
			questionText: '"പേരാര്‍" എന്നറിയപ്പെടുന്ന പുഴ?',
			answerOptions: [
				{ answerText: 'പെരിയാര്‍', isCorrect: false },
				{ answerText: 'ഭാരതപ്പുഴ', isCorrect: true },
				{ answerText: 'പമ്പ', isCorrect: false },
				{ answerText: 'കല്ലായിപ്പുഴ', isCorrect: false },
			],
		},
		{
			questionText: '"ബൂരിബൂട്ട്" എന്നറിയപ്പെടുന്ന ആഘോഷം ഏത് സംസ്ഥാനത്തിന്റെതാണ്?',
			answerOptions: [
				{ answerText: 'അരുണാചല്‍ പ്രദേശ്‌', isCorrect: true },
				{ answerText: 'ബീഹാര്‍', isCorrect: false },
				{ answerText: 'മണിപ്പൂര്‍', isCorrect: false },
				{ answerText: 'സിക്കിം', isCorrect: false },
			],
		},
		{
			questionText: 'ഇന്ത്യയിലെ ഏറ്റവും നീളം കൂടിയ അണക്കെട്ട്?',
			answerOptions: [
				{ answerText: 'ഭക്രാനംഗല്‍', isCorrect: false },
				{ answerText: 'തെഹ്രി', isCorrect: false },
				{ answerText: 'ഫറാക്ക', isCorrect: false },
				{ answerText: 'ഹിരാക്കുഡ്', isCorrect: true },
			],
		},
		{
			questionText: '"സ്പിരിറ്റ്‌ ഓഫ് സാള്‍ട്ട്" എന്നറിയപ്പെടുന്ന ആസിഡ്?',
			answerOptions: [
				{ answerText: 'നൈട്രിക് ആസിഡ്', isCorrect: false },
				{ answerText: 'അസറ്റിക് ആസിഡ്', isCorrect: false },
				{ answerText: 'സള്‍ഫ്യൂരിക് ആസിഡ്', isCorrect: false },
				{ answerText: 'ഹൈഡ്രോ ക്ലോറിക് ആസിഡ്', isCorrect: true },
			],
		},
		{
			questionText: 'സന്ധ്യാനക്ഷത്രം എന്നു അറിയപ്പെടുന്ന ഗ്രഹം?',
			answerOptions: [
				{ answerText: 'ബുധന്‍', isCorrect: false },
				{ answerText: 'ചൊവ്വ', isCorrect: false },
				{ answerText: 'ശനി', isCorrect: false },
				{ answerText: 'ശുക്രന്‍', isCorrect: true },
			],
		},
		{
			questionText: '"ഗോത്രയാനം" എന്ന കൃതിയുടെ രചയിതാവ്?',
			answerOptions: [
				{ answerText: 'എൻ. കൃഷ്ണപിള്ള', isCorrect: false },
				{ answerText: 'ചെറുശ്ശേരി', isCorrect: false },
				{ answerText: 'പൂന്താനം', isCorrect: false },
				{ answerText: 'അയ്യപ്പപ്പണിക്കർ', isCorrect: true },
			],
		},
		{
			questionText: 'കൈഗ ആണവനിലയം സ്ഥിതി ചെയ്യുന്ന സംസ്ഥാനം?',
			answerOptions: [
				{ answerText: 'ഗുജറാത്ത്', isCorrect: false },
				{ answerText: 'മഹാരാഷ്ട്ര', isCorrect: false },
				{ answerText: 'കർണാടക', isCorrect: true },
				{ answerText: 'തമിഴ്നാട്', isCorrect: false  },
			],
		},
		{
			questionText: 'ബക്സർ യുദ്ധം നടന്നത് ഏത് നദീതീരത്താണ്?',
			answerOptions: [
				{ answerText: 'ഗംഗ', isCorrect: true },
				{ answerText: 'യമുന', isCorrect: false },
				{ answerText: 'ഗോദാവരി', isCorrect: false },
				{ answerText: 'നര്‍മ്മദ', isCorrect: false },
			],
		},
		{
			questionText: '"ആനവാരിയും പൊന്‍കുരിശും" എന്ന കൃതിയുടെ രചയിതാവ്?',
			answerOptions: [
				{ answerText: 'കാക്കനാടന്‍', isCorrect: false },
				{ answerText: 'മലയാറ്റൂര്‍', isCorrect: false },
				{ answerText: 'വൈക്കം മുഹമ്മദ്‌ ബഷീര്‍', isCorrect: true },
				{ answerText: 'പൊന്‍കുന്നം വര്‍ക്കി', isCorrect: false },
			],
		},
	];

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
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
			<Footer/>
		</div>
	);
}
