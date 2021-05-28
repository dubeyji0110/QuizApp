function Header({ quesNo }) {
	return (
		<header className='bg-purple-900 flex items-center justify-around w-full fixed top-0 p-4'>
			<h1 className='text-white font-semibold text-xl'>QUIZ ZILLA</h1>
			{quesNo < 11 && (
				<h1 className='text-white font-bold text-xl'>{quesNo} / 10</h1>
			)}
		</header>
	);
}

export default Header;
