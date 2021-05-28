import { useEffect, useState } from "react";

function Button({ option, isAnswer, setIsAnswered, disable, updateScore }) {
	const [class1, setClass1] = useState("");

	const checkAns = () => {
		isAnswer
			? setClass1("bg-green-500 hover:bg-green-600")
			: setClass1("bg-red-500 hover:bg-red-600");
		setIsAnswered(true);
		updateScore(isAnswer);
	};

	useEffect(() => {
		setClass1("");
	}, [option]);

	return !disable ? (
		<button
			onClick={checkAns}
			dangerouslySetInnerHTML={{ __html: option }}
			className={`p-x-4 py-3 rounded-md shadow-md text-white font-semibold text-lg transition duration-100 hover:shadow-xl ${
				class1 ? class1 : "bg-purple-600 hover:bg-purple-700"
			}`}
		/>
	) : (
		<button
			disabled={true}
			dangerouslySetInnerHTML={{ __html: option }}
			className={`p-x-4 py-3 rounded-md shadow-md text-white font-semibold text-lg transition duration-100 hover:shadow-xl ${
				isAnswer ? "bg-green-500 hover:bg-green-600" : ""
			}`}
		/>
	);
}

export default Button;
