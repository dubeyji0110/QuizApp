import Header from "../components/Header";

function Score({ setQuesNo, score, setScore, fetchApi }) {
    const restart = () => {
        fetchApi();
		setQuesNo(1);
		setScore(0);
	};

	return (
		<main className='flex w-full h-screen justify-evenly flex-col'>
			<Header />
			<section className='w-full text-center mt-12'>
				<h1 className='text-2xl font-bold'>SCOREBOARD</h1>
				<div className='bg-purple-700 w-3/4 m-auto lg:w-5/12 rounded mt-12 p-5 text-white'>
					<p className='font-semibold text-lg'>Your Score:</p>
					<p className='font-semibold text-lg'>{score} / 10</p>
				</div>
			</section>
			<div className='w-full flex justify-evenly'>
				<button
					onClick={restart}
					className='bg-black text-white p-3 rounded shadow-md hover:shadow-lg hover:bg-gray-900 transition transform hover:scale-105'>
					Retry Quiz
				</button>
				<a
					href='/'
					className='bg-black text-white p-3 rounded shadow-md hover:shadow-lg hover:bg-gray-900 transition transform hover:scale-105'>
					Home Page
				</a>
			</div>
		</main>
	);
}

export default Score;
