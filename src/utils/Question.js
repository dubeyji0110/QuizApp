import Button from "../components/Button";
import Timer from "./Timer";

function Question({
	questions,
	opts,
	isAnswered,
	answer,
	updateScore,
	setIsAnswered,
}) {
	return (
		<main className='flex items-center flex-col justify-center h-screen w-full bg-pink-100'>
			<Timer setIsAnswered={setIsAnswered} />
			<section className='w-5/6 max-w-2xl'>
				<div className='bg-purple-800 p-8 w-full rounded-sm shadow'>
					<h2
						className='text-xl text-white font-medium antialiased'
						dangerouslySetInnerHTML={{
							__html: questions[0].question,
						}}
					/>
				</div>
				<div className='grid items-center sm:grid-cols-2 mt-4 gap-1.5'>
					{opts.map((e, i) =>
						isAnswered && answer === e ? (
							<Button
								key={i}
								disable={true}
								option={e}
								isAnswer={answer === e ? true : false}
							/>
						) : (
							<Button
								key={i}
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
	);
}

export default Question;
