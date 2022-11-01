import { db } from "../database";
import { stringify } from "../utils";

export async function getAll(){
    return (
        await db.connection.query(`
        select * from author;`)
      ).recordset;
}
export async function add(ful_name_author,author_birthday) {
    return db.connection.query(
      `insert into author (ful_name_author,author_birthday) values(${stringify(ful_name_author)},${stringify(author_birthday)});`
    );
  }
  export async function remove(id) {
    return db.connection.query(`delete from author where id_author = ${id};`);
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
      `update author set ${values} where id_author = ${id};`
    );
  }
  export async function getOne(id) {
    return (
      await db.connection.query(`select * from author where id_author = ${id};`)
    ).recordset;
  }
  