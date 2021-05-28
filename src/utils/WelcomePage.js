import { Link } from "react-router-dom";
import Instruction from "../components/Instruction";

function WelcomePage({fetchApi}) {
	return (
		<main className='h-screen w-full bg-pink-100 flex flex-col items-center border-8 border-purple-500 justify-evenly'>
			<h1 className='text-5xl underline font-bold text-purple-900'>
				QUIZ ZILLA
			</h1>
			<Instruction />
            <Link
                // onClick={fetchApi}
				to='/start-quiz'
				className='text-white bg-black px-2 py-3 rounded font-semibold shadow-md hover:scale-105 transition transform duration-100 hover:bg-gray-900'>
				Start Quiz
			</Link>
		</main>
	);
}

export default WelcomePage;
