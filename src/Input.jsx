import React from "react";

const Input = (props) => {
	return (
		<div className="todoApp-input">
			<input
				type="text"
				onChange={props.handleChange}
				value={props.newItem}
				placeholder="Write your task"
			/>
			<button onClick={props.addItem}>Add Item</button>
		</div>
	);
};

export default Input;
