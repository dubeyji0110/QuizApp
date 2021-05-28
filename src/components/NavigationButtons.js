import { Fragment } from "react";

function NavigationButtons({ quesNo, fetchApi, isAnswered }) {
	return (
		<Fragment>
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

export default NavigationButtons;
