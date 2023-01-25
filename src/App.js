import "./App.css";
import Task from "./Task";
import { useState } from "react";

function App() {
	const [newItem, setNewItem] = useState("");
	const [updateList, setUpdateList] = useState([]);
	const [erro, setErro] = useState("");

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
			setUpdateList([...updateList, item]);
			setNewItem("");
			setErro("");
		} else {
			setErro("Tarefa em Branco");
		}
	}

	function deleteItem(id) {
		const newUpdateList = updateList.filter((item) => {
			if (item.id === id) {
				return false;
			} else {
				return true;
			}
		});
		setUpdateList(newUpdateList);
	}

	function checkItem(id) {
		setUpdateList(
			updateList.map((item) => {
				if (item.id === id) {
					return { ...item, checked: !item.checked };
				} else {
					return item;
				}
			})
		);
	}

	function handleChange(e) {
		const inputValue = e.target.value;
		setNewItem(inputValue);
	}

	return (
		<div className="App">
			<div className="todoApp">
				<p style={{ color: "red" }}>{erro}</p>
				<h1>To Do List App</h1>
				<div className="todoApp-input">
					<input
						type="text"
						onChange={handleChange}
						value={newItem}
						placeholder="Digite a Tarefa"
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
