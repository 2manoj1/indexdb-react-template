import React, { useState } from "react";
import { db } from "../db";

function AddStudent() {
	const [studValue, setStudValue] = useState({
		studName: "",
		age: "",
		subject: "",
	});

	const handleChange = (e) => {
		e.preventDefault();
		const key = e.target.name;
		setStudValue((prev) => ({
			...prev,
			[key]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("submitting", studValue);
		const id = await db.student.add({
			name: studValue?.studName,
			age: studValue?.age,
			subject: studValue?.subject,
		});
		// await db.teacher.add({
		// 	name: "dummy",
		// 	age: "44",
		// 	specialty: "dummy",
		// });
		alert(id);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<br />
			<input
				name="studName"
				value={studValue?.studName}
				onChange={handleChange}
			/>
			<br />
			<label>Age</label>
			<br />
			<input name="age" value={studValue?.age} onChange={handleChange} />
			<br />
			<label>subject</label>
			<br />
			<input
				name="subject"
				value={studValue?.subject}
				onChange={handleChange}
			/>
			<br />
			<button type="submit">Save</button>
		</form>
	);
}

export default AddStudent;
