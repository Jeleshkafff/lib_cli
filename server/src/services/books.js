import { db } from "../database";
import { stringify } from "../utils";

export async function getAll() {
  return (
    await db.connection.query(`
    select * from book;`)
  ).recordset;
}
export async function add(author, ganre, name_book, amount) {
  return db.connection.query(
    `insert into book (author,ganre,name_book,amount) values(${author},${ganre},${stringify(
      name_book
    )},${amount});`
  );
}
export async function remove(id) {
  return db.connection.query(`delete from book where book_id = ${id};`);
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
    `update book set ${values} where book_id = ${id};`
  );
}
export async function getOne(id) {
  return (
    await db.connection.query(`select * from book where book_id = ${id};`)
  ).recordset;
}
