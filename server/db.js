import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'akshat@0201#',
  database: 'inventory_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

export default db;
