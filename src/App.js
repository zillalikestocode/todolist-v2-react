import './App.css';
import {useState} from "react"
import Header from "./components/Header"
import Lists from "./components/Lists"
import AddItem from "./components/AddItem"
import useLocalStorage from './useLocalStorage';

function App() {
	const [showAddList, setShowAddList] = useState(false)
	const [lists, setLists] = useLocalStorage('toDoList', [])
	const [search, setSearch] = useState(false)
	const [searchText, setSearchText] = useState('')
	const searchedList = lists.filter((list) => list.activity.toLowerCase().includes(searchText.toLowerCase()))
  
	function handleSearch(e){
		setSearchText(e.target.value);
		
	}
	function deleteItem(id){
		setLists(
			lists.filter((item) => item.id !== id)	
		)
	}
	function addList(list){
		const id = Math.floor(Math.random() * 100000) + 1	
		const newList = {id, ...list}	
		setLists([...lists, newList])
	}
	

  return (
    <div className="container rounded min-h-[200px] border mt-7 border-1 w-4/5 m-auto p-4 ">
		<Header setSearch={setSearch} setSearchText={setSearchText} handleSearch={handleSearch} searchText={searchText} openAdd={() => setShowAddList(!showAddList)} search={search} showAdd={showAddList}/>
		{showAddList && <AddItem onAdd={addList}/>}
		{lists.length > 0 ? (<Lists lists={searchedList} onDelete={deleteItem} />):(<p className="mt-1 text-sm">No items to show</p>)}
    </div>
  );
}

export default App;
