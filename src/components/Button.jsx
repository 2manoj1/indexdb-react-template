import "./button.css";
import React from "react";

const Button = ({ variant, children, Manoj }) => {
	let classNameVariant = variant === "primary" ? "btn-p" : "btn-s";

	return (
		<button className={`btn ${classNameVariant}`} onClick={Manoj}>
			{children}
		</button>
	);
};

export default Button;
