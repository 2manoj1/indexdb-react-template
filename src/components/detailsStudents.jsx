import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { db } from "../db";

function DetailsStudents() {
	const students = useLiveQuery(() => db.student.toArray());

	console.log({ students });
	return (
		<div>
			{students?.map(({ id, name, age, subject }) => (
				<div key={id}>
					{id}, {name}, {age}, {subject}
				</div>
			))}
		</div>
	);
}

export default DetailsStudents;
