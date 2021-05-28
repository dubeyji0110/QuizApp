function Instruction() {
	return (
		<section className='border-8 flex flex-col items-center shadow-lg rounded-2xl border-double border-purple-900 w-5/6 max-w-2xl p-6'>
			<h1 className='text-2xl font-bold text-gray-800'>INSTRUCTIONS:</h1>
			<div className='mt-4 text-lg text-gray-800 font-medium'>
				<p>1. Quiz Contains 10 questions.</p>
				<p>2. Each question can be of any category.</p>
				<p>3. You will get 30 seconds per question to answer.</p>
				<p>
					4. In case of wrong data/information kindly report to{" "}
					<a
						className='underline'
						target='_blank'
						rel='noreferrer'
						href='mailto:devanshdubey@gmail.com'>
						Admin
					</a>
					.
				</p>
			</div>
		</section>
	);
}

export default Instruction;
