import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import NavigationButtons from "../components/NavigationButtons";
import Question from "./Question";
import Score from "./Score";

function Main({ questions, fetchApi, quesNo, setQuesNo, score, setScore }) {
	const [opts, setOpts] = useState([]);
	const [isAnswered, setIsAnswered] = useState(false);

	const updateScore = (flag) => {
		if (flag) setScore(score + 1);
	};

	const answer = questions[0].correct_answer;

	useEffect(() => {
		const arr = [];
		arr.push(
			...questions[0].incorrect_answers,
			questions[0].correct_answer
		);
		arr.sort(() => Math.random() - 0.5);
		setOpts(arr);
	}, [questions]);

	return quesNo > 10 ? (
		<Score
			fetchApi={fetchApi}
			setQuesNo={setQuesNo}
			score={score}
			setScore={setScore}
		/>
	) : (
		<Fragment>
			<Header quesNo={quesNo} />
			<Question
				opts={opts}
				updateScore={updateScore}
				answer={answer}
				setIsAnswered={setIsAnswered}
				questions={questions}
				isAnswered={isAnswered}
			/>
			<NavigationButtons
				quesNo={quesNo}
				fetchApi={fetchApi}
				isAnswered={isAnswered}
			/>
		</Fragment>
	);
}

export default Main;
