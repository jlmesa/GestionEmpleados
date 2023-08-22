import getConnection from "../database.js";

export const getEmpleados = async (req, res) => {
  try {
    const connection = await getConnection();
    await connection.query("SELECT * FROM empleados", (err, result) => {
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getEmpleado = (req, res) => {};

export const createEmpleado = async (req, res) => {
  const { nombre, edad, pais, cargo, experiencia } = req.body;
  const empleado = { nombre, edad, pais, cargo, experiencia };

  try {
    const connection = await getConnection();
    await connection.query(
      "INSERT INTO empleados set ?",
      empleado,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Empleado registardo exitosamente!");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { id, nombre, edad, pais, cargo, experiencia } = req.body;
    const empleado = { nombre, edad, pais, cargo, experiencia };

    const connection = await getConnection();
    await connection.query("UPDATE empleados SET ? WHERE id = ?", [empleado, id], (err, result) => {
      if(err){
        console.log(err);
      }else{
        res.send("Empleado actualizado exitosamente!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    await connection.query("DELETE FROM empleados WHERE id = ?", [id], (err, result) => {
      if(err){
        console.log(err);
      }else{
        res.send("Empleado eliminado exitosamente!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
