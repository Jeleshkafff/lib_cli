import { db } from "../database";
import { stringify } from "../utils";

export async function getAll() {
  return (
    await db.connection.query(`
    select * from ganre;`)
  ).recordset;
}
export async function add(ganre_description, ganre_name) {
  return db.connection.query(
    `insert into ganre (ganre_description,ganre_name) values(${stringify(
      ganre_description
    )},${stringify(ganre_name)});`
  );
}
export async function remove(id) {
  return db.connection.query(`delete from ganre where id_ganre = ${id};`);
}
export async function update(id, newElem) {
  const values = Object.entries(newElem)
    .map(([key, value]) => {
      let validValue;
      if (typeof value === "number") {
        validValue = value;
      } else {
        validValue = stringify(value);
      }
      return `${key} = ${validValue}`;
    })
    .join(",");
  return db.connection.query(
    `update ganre set ${values} where id_ganre = ${id};`
  );
}
export async function getOne(id) {
  return (
    await db.connection.query(`select * from ganre where id_ganre = ${id};`)
  ).recordset;
}
