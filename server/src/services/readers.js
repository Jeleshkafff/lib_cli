import { db } from "../database";
import { stringify } from "../utils";

export async function getAll() {
  return (
    await db.connection.query(`
    select * from readers;`)
  ).recordset;
}
export async function add(name, surname, patronymic, address, passport, phone) {
    console.log(`insert into readers (name, surname, patronymic, address, passport, phone) values(${stringify(
        name
      )},${stringify(surname)},${stringify(patronymic)},${stringify(address)},${passport},${phone});`)
  return db.connection.query(
    `insert into readers (name, surname, patronymic, address, passport, phone) values(${stringify(
      name
    )},${stringify(surname)},${stringify(patronymic)},${stringify(address)},${passport},${phone});`
  );
}
export async function remove(id) {
  return db.connection.query(`delete from readers where reader_id = ${id};`);
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
    `update readers set ${values} where reader_id = ${id};`
  );
}
export async function getOne(id) {
  return (
    await db.connection.query(`select * from readers where reader_id = ${id};`)
  ).recordset;
}
