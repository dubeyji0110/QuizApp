import { useEffect, useState } from "react";

function Timer({ setIsAnswered }) {
	const [seconds, setseconds] = useState(30);
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		if (flag) {
			setTimeout(() => alert("Times Up! Move to next Question."), 1000);
		}
	}, [flag]);

	useEffect(() => {
		let interval = setInterval(() => {
			if (seconds > 0) {
				setseconds(seconds - 1);
			}
			if (seconds === 0) {
				clearInterval(interval);
				setIsAnswered(true);
				setFlag(true);
			}
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<section className='p-4 w-5/6 max-w-2xl rounded -mt-4 mb-3'>
			<p className='text-xl font-bold text-center'>
				Time Left:{" "}
				<span
					className={`${
						seconds < 10 && seconds !== 0
							? "text-red-800 animate-ping"
							: ""
					} ${seconds === 0 ? "text-red-500" : ""}`}>
					00:
					{("0" + seconds.toString()).slice(-2)}
				</span>
			</p>
		</section>
	);
}

export default Timer;
