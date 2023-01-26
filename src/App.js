import "./App.css";
import Task from "./Task";
import { useState } from "react";

function App() {
	const [newItem, setNewItem] = useState("");
	const [updateList, setUpdateList] = useState([]);
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
			setNoInputError("Tarefa em Branco");
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
			<div className="todoApp">
				<p style={{ color: "red" }}>{noInputError}</p>
				<h1>To Do List App</h1>
				<div className="todoApp-input">
					<input
						type="text"
						onChange={handleChange}
						value={newItem}
						placeholder="Write your task"
					/>
					<button onClick={addItem}>Add Item</button>
				</div>
			</div>
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
