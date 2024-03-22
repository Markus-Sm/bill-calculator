import { useState } from 'react'

function App() {
	const [cost, setCost] = useState('')
	const [numberOfPeople, setNumberOfPeople] = useState('')
	const [percentage, setPercentage] = useState(0)
	const [buttonClicked, setButtonClicked] = useState(false)

	const bill = cost / numberOfPeople
	const amuont = Math.round(bill * percentage)
	const totalAmount = Math.round(amuont + bill)

	return (
		<div className='App wrapper'>
			<TopApp />
			<BottomApp
				cost={cost}
				setCost={setCost}
				people={numberOfPeople}
				setPeople={setNumberOfPeople}
				tip={percentage}
				setTip={setPercentage}
			/>
			<Count
				buttonClicked={buttonClicked}
				setButtonClicked={setButtonClicked}
				bill={totalAmount}
				cost={cost}
				people={numberOfPeople}
				tip={percentage}
			/>
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

function BottomApp({ cost, setCost, people, setPeople, tip, setTip }) {
	const handleCostChange = e => {
		const value = +e.target.value
		setCost(value < 0 ? 0 : value)
	}

	const handlePeopleChange = e => {
		const value = +e.target.value
		setPeople(value < 0 ? 0 : value)
	}

	return (
		<div className='bottom'>
			<label htmlFor='price'>Amount to pay</label>
			<input type='number' id='price' value={cost} onChange={handleCostChange} />

			<label htmlFor='people'>Number of poeple: </label>
			<input type='number' id='people' value={people} onChange={handlePeopleChange} />

			<label htmlFor='tip'>Tip:</label>
			<select id='tip' value={tip} onChange={e => setTip(+e.target.value)}>
				<option value='0' disabled>
					- wybierz napiwek -
				</option>
				<option value='0.05'>5%</option>
				<option value='0.1'>10%</option>
				<option value='0.15'>15%</option>
				<option value='0.2'>20%</option>
			</select>
		</div>
	)
}

function Count({ buttonClicked, setButtonClicked, bill, cost, people }) {
	return (
		<div>
			<buttton className='count' onClick={() => setButtonClicked(true)}>
				Count
			</buttton>
			<p className='error'></p>
			{buttonClicked && cost && people && (
				<p className='cost-info'>
					You should pay <span className='cost'>{bill}$</span> each
				</p>
			)}
		</div>
	)
}

export default App
