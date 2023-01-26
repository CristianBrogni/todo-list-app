import "./App.css";
import Task from "./Task";
import Header from "./Header";
import { useState } from "react";

function App() {
	const [newItem, setNewItem] = useState("");
	const [updateList, setUpdateList] = useState(
		JSON.parse(localStorage.getItem("tasks"))
	);
	const [noInputError, setNoInputError] = useState("");

	function addItem() {
		if (newItem) {
			const item = {
				id:
					updateList.length === 0
						? 1
						: updateList[updateList.length - 1].id + 1,
				itemName: newItem,
				checked: false,
			};
			const updatedList = [...updateList, item];
			setUpdateList(updatedList);
			setNewItem("");
			setNoInputError("");
			localStorage.setItem("tasks", JSON.stringify(updatedList));
		} else {
			setNoInputError("Input Field is Empty");
		}
	}

	function deleteItem(id) {
		const updatedList = updateList.filter((item) => {
			if (item.id === id) {
				return false;
			} else {
				return true;
			}
		});
		setUpdateList(updatedList);
		localStorage.setItem("tasks", JSON.stringify(updatedList));
	}

	function checkItem(id) {
		const updatedList = updateList.map((item) => {
			if (item.id === id) {
				return { ...item, checked: !item.checked };
			} else {
				return item;
			}
		});
		setUpdateList(updatedList);
		localStorage.setItem("tasks", JSON.stringify(updatedList));
	}

	function handleChange(e) {
		const inputValue = e.target.value;
		setNewItem(inputValue);
	}

	return (
		<div className="App">
			<Header
				noInputError={noInputError}
				handleChange={handleChange}
				newItem={newItem}
				addItem={addItem}
			/>
			<div className="todoApp-list">
				{updateList.map((item) => {
					return (
						<Task
							deleteItem={deleteItem}
							checkItem={checkItem}
							checked={item.checked}
							itemName={item.itemName}
							id={item.id}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
