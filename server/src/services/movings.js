import { db } from "../database";
import { stringify } from "../utils";

export async function getAll() {
  return (
    await db.connection.query(`
        select * from moving;`)
  ).recordset;
}
export async function add(reader, book, date_in, date_out, ret, date_out_real) {
  return db.connection.query(
    `insert into moving (reader,book,date_in, date_out,ret,date_out_real) values{${reader},${book},${stringify(
      date_in
    )}, ${stringify(date_out)},${ret},${stringify(date_out_real)});`
  );
}
export async function remove(id) {
  return db.connection.query(`delete from moving where id_author = ${id};`);
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
    `update moving set ${values} where id_author = ${id};`
  );
}
export async function getOne(id) {
  return (
    await db.connection.query(`select * from moving where id_author = ${id};`)
  ).recordset;
}
