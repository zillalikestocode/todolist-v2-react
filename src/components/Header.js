import React from 'react';
import Button from './Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

const Header = ({ openAdd, showAdd, search, searchText, setSearch, setSearchText, handleSearch }) => {
	
  return (
    <div className='container flex items-center'>
        <h2 className="text-2xl bold">Todo List</h2>
		<div className='ml-auto'>
      { search && <input type="text" value={searchText} onChange={handleSearch} className="border border-2 w-20 mx-2 rounded text-xs h-6 border-indigo-300 px-1 py-0.5 " />}
      <FontAwesomeIcon icon={search ? faTimes : faSearch} onClick={() => setSearch(!search)} className="text-violet-400 mr-2 cursor-pointer"/>
			<Button onClick={openAdd} text={showAdd ? "Finish" : "Add"} bg={showAdd ? "bg-sky-500" : "bg-violet-400"} color="text-white" extraStyles="hover:bg-violet-800"/>
        </div>
    </div>
  )
}

export default Header
