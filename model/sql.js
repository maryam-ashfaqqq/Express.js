import mysql from 'mysql2/promise';
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"!@#$%",
  database:"sql_db"

});
console.log("Connection success");
// await db.execute(`
//   CREATE TABLE  pirates(
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE
//   );
//   `)

//  await db.execute(`
//   insert into pirates(username,email) 
//   values("maryam","maryam.com")
//    `)
   const rows = await db.execute(`
select * from pirates `)
console.log(rows);
