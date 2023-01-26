import React from "react";
import Input from "./Input";

const Header = (props) => {
	return (
		<div className="todoApp">
			<p style={{ color: "red" }}>{props.noInputError}</p>
			<h1>To Do List App</h1>
			<Input
				handleChange={props.handleChange}
				newItem={props.newItem}
				addItem={props.addItem}
			/>
		</div>
	);
};

export default Header;
