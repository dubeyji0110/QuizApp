import { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import WelcomePage from "./components/WelcomePage";

function App() {
	const _API = "https://opentdb.com/api.php?amount=1";
	const [questions, setQuestions] = useState([]);
	const [quesNo, setQuesNo] = useState(0);
	const [score, setScore] = useState(0);

	const fetchApi = () => {
		setQuestions([]);
		setQuesNo(quesNo + 1);
		fetch(_API)
			.then((res) => res.json())
			.then((data) => setQuestions(data.results));
	};

	// useEffect(() => fetchApi(), []);

	return (
		<Router>
			<Switch>
				<Route path='/start-quiz'>
					{questions.length ? (
						<Fragment>
							<Main
								questions={questions}
								fetchApi={fetchApi}
								quesNo={quesNo}
								setQuesNo={setQuesNo}
								score={score}
								setScore={setScore}
							/>
						</Fragment>
					) : (
						<main className='flex items-center justify-center h-screen w-full bg-pink-100'>
							<div
								className='h-8 w-8 border border-gray-100 animate-spin rounded-full mr-4'
								style={{
									borderLeftColor: "black",
									borderLeftWidth: "5px",
									borderTopColor: "black",
									borderTopWidth: "5px",
									borderRightColor: "black",
									borderRightWidth: "5px",
								}}></div>
							<h1 className='text-2xl font-bold'>Loading...</h1>
						</main>
					)}
				</Route>
				<Route path='/'>
					<WelcomePage fetchApi={fetchApi} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
