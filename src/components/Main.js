import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
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
		<Score fetchApi={fetchApi} setQuesNo={setQuesNo} score={score} setScore={setScore} />
	) : (
		<Fragment>
			<Header quesNo={quesNo} />
			<main className='flex items-center justify-center h-screen w-full bg-pink-100'>
				<section className=' w-5/6 max-w-2xl'>
					<div className='bg-purple-800 p-8 w-full rounded-sm shadow'>
						<h2
							className='text-xl text-white font-medium antialiased'
							dangerouslySetInnerHTML={{
								__html: questions[0].question,
							}}
						/>
					</div>
					<div className='grid items-center sm:grid-cols-2 mt-4 gap-1.5'>
						{opts.map((e) =>
							isAnswered && answer === e ? (
								<Button
									disable={true}
									option={e}
									isAnswer={answer === e ? true : false}
								/>
							) : (
								<Button
									updateScore={updateScore}
									isAnswered={setIsAnswered}
									option={e}
									isAnswer={answer === e ? true : false}
								/>
							)
						)}
					</div>
				</section>
			</main>
			{quesNo === 10 ? (
				<button
					onClick={fetchApi}
					disabled={!isAnswered}
					className={`absolute bottom-10 right-10 text-white bg-black px-5 py-3 rounded font-semibold shadow-md hover:scale-105 transition transform duration-100 hover:bg-gray-900 ${
						isAnswered ? "" : "cursor-not-allowed"
					}`}>
					Finish
				</button>
			) : (
				<button
					disabled={!isAnswered}
					onClick={fetchApi}
					className={`absolute bottom-10 right-10 text-white bg-black px-2 py-3 rounded font-semibold shadow-md hover:scale-105 transition transform duration-100 hover:bg-gray-900 ${
						isAnswered ? "" : "cursor-not-allowed"
					}`}>
					Next Question
				</button>
			)}
			<a
				href='/'
				className='absolute bottom-10 left-10 text-white bg-black px-5 py-3 rounded font-semibold shadow-md hover:scale-105 transition transform duration-100 hover:bg-gray-900'>
				Back
			</a>
		</Fragment>
	);
}

export default Main;
