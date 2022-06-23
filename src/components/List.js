import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

function List({ list, onDelete }) {
	return (
		<div className="bg-violet-400 rounded p-2 my-2 text-white flex items-start">
			<div className="">
				<h4 className=" text-lg">{list.activity}</h4>
				<p className="text-sm">{list.date}</p>
				
			</div>
			<FontAwesomeIcon icon={faTimes} className="ml-auto p-2 cursor-pointer" onClick={() => onDelete(list.id)}/>
		</div>
	) 
}

export default List
