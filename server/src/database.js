import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'react_crud_empleados'
});

const getConnection = () => {
  return connection;
};

export default getConnection;