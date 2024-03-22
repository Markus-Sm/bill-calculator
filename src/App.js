function App() {
	return (
		<div className='App wrapper'>
			<TopApp />
			<BottomApp />
		</div>
	)
}

function TopApp() {
	return (
		<div className='top'>
			<h1>BillSplitter</h1>
			<p>Share your bill with a friend! 🙌🏼</p>
		</div>
	)
}

function BottomApp() {
	return (
		<div className='bottom'>
			<label htmlFor='price'>Amount to pay</label>
			<input type='number' id='price' />

			<label htmlFor='people'>Number of poeple: </label>
			<input type='number' id='people' />

			<label htmlFor='tip'>Tip:</label>
			<select id='tip' value='0'>
				<option value='0' disabled>
					- wybierz napiwek -
				</option>
				<option value='0.05'>5%</option>
				<option value='0.1'>10%</option>
				<option value='0.15'>15%</option>
				<option value='0.2'>20%</option>
			</select>

			<Count />
		</div>
	)
}

function Count() {
	return (
		<div>
			<buttton className='count'>Count</buttton>
			<p className='error'></p>
			<p className='cost-info'>
				You should pay <span className='cost'></span>$ each
			</p>
		</div>
	)
}

export default App
