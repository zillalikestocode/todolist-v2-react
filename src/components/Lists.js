import React, {useState} from 'react';
import List from "./List"

function Lists({ lists, onDelete }) {
	
	
	return (
		<div >
			
			{lists.map((list) =>(
				<List key={list.id} list={list} onDelete={onDelete} />	
			))}	
	</div>
	);
}
export default Lists;

