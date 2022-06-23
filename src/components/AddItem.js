import Button from "./Button"
import { useState } from 'react'

function AddItem({ onAdd }) {
	const [activity, setActivity] = useState('')
	const [date, setDate] = useState('')

	function onSubmit(e){
		e.preventDefault()

		if (!activity){
			alert('Please add an activity')
			return
		}
		onAdd({ activity, date })

		setActivity('')
		setDate('')
	}

	return (
		<div>
			<form action="" onSubmit={onSubmit}>
				<input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} className="w-full border border-2 rounded px-2 py-1 m-1 mt-2" placeholder="Type in an activity" />
				<input type="text" onChange={(e) => setDate(e.target.value)} value={date} className="w-full border border-2 rounded px-2 py-1 m-1" placeholder="Type in the date and time"/>
				<Button text="Add to list" bg="bg-black" extraStyles="p-1 w-full m-1" color="text-white"/>
			</form>
		</div>
	)
}

export default AddItem
