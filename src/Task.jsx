import React from "react";
import "./App.css";

const Task = (props) => {
	return (
		<div className="todoApp-list-item">
			<input type="checkbox" onClick={() => props.checkItem(props.id)} />
			<span
				style={{ textDecorationLine: props.checked ? "line-through" : null }}
			>
				{props.itemName}
			</span>

			<button onClick={() => props.deleteItem(props.id)}>Delete</button>
		</div>
	);
};

export default Task;
