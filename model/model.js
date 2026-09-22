import db from "./sql.js"
export async function userList() {
  const [rows]= await  db.query("SELECT * FROM pirates");
  return rows;
}
