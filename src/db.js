import Dexie from "dexie";

export const db = new Dexie("db_student");
db.version(6).stores({
	student: "++id, name, age, subject",
	teacher: "++id, name",
});
