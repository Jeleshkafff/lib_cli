'use strict';

var express = require('express');
var cors = require('cors');
var mssql = require('mssql/msnodesqlv8');

/**
 * @type {{connection: import('mssql').ConnectionPool}}
 */

const db = {};

function stringify(znachenie) {
    return JSON.stringify(znachenie).replace(/\"/g, "'")
}

async function getAll$9() {
  return (
    await db.connection.query(`
    select * from book;`)
  ).recordset;
}
async function add$9(author, ganre, name_book, amount) {
  return db.connection.query(
    `insert into book (author,ganre,name_book,amount) values(${author},${ganre},${stringify(
      name_book
    )},${amount});`
  );
}
async function remove$9(id) {
  return db.connection.query(`delete from book where book_id = ${id};`);
}
async function update$9(id, newElem) {
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
async function getOne$9(id) {
  return (
    await db.connection.query(`select * from book where book_id = ${id};`)
  ).recordset;
}

async function getAll$8(){
    return (
        await db.connection.query(`
        select * from author;`)
      ).recordset;
}
async function add$8(ful_name_author,author_birthday) {
    return db.connection.query(
      `insert into author (ful_name_author,author_birthday) values(${stringify(ful_name_author)},${stringify(author_birthday)});`
    );
  }
  async function remove$8(id) {
    return db.connection.query(`delete from author where id_author = ${id};`);
  }
  async function update$8(id, newElem) {
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
  async function getOne$8(id) {
    return (
      await db.connection.query(`select * from author where id_author = ${id};`)
    ).recordset;
  }

async function getAll$7() {
  return (
    await db.connection.query(`
    select * from ganre;`)
  ).recordset;
}
async function add$7(ganre_description, ganre_name) {
  return db.connection.query(
    `insert into ganre (ganre_description,ganre_name) values(${stringify(
      ganre_description
    )},${stringify(ganre_name)});`
  );
}
async function remove$7(id) {
  return db.connection.query(`delete from ganre where id_ganre = ${id};`);
}
async function update$7(id, newElem) {
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
async function getOne$7(id) {
  return (
    await db.connection.query(`select * from ganre where id_ganre = ${id};`)
  ).recordset;
}

async function getAll$6() {
  return (
    await db.connection.query(`
    select * from readers;`)
  ).recordset;
}
async function add$6(name, surname, patronymic, address, passport, phone) {
    console.log(`insert into readers (name, surname, patronymic, address, passport, phone) values(${stringify(
        name
      )},${stringify(surname)},${stringify(patronymic)},${stringify(address)},${passport},${phone});`);
  return db.connection.query(
    `insert into readers (name, surname, patronymic, address, passport, phone) values(${stringify(
      name
    )},${stringify(surname)},${stringify(patronymic)},${stringify(address)},${passport},${phone});`
  );
}
async function remove$6(id) {
  return db.connection.query(`delete from readers where reader_id = ${id};`);
}
async function update$6(id, newElem) {
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
async function getOne$6(id) {
  return (
    await db.connection.query(`select * from readers where reader_id = ${id};`)
  ).recordset;
}

async function getAll$5() {
  return (
    await db.connection.query(`
        select * from moving;`)
  ).recordset;
}
async function add$5(reader, book, date_in, date_out, ret, date_out_real) {
  return db.connection.query(
    `insert into moving (reader,book,date_in, date_out,ret,date_out_real) values{${reader},${book},${stringify(
      date_in
    )}, ${stringify(date_out)},${ret},${stringify(date_out_real)});`
  );
}
async function remove$5(id) {
  return db.connection.query(`delete from moving where id_author = ${id};`);
}
async function update$5(id, newElem) {
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
async function getOne$5(id) {
  return (
    await db.connection.query(`select * from moving where id_author = ${id};`)
  ).recordset;
}

async function getAll$4(req, res) {
  let book = await getAll$9();
  res.json(book);
}
async function getOne$4(req, res) {
  const id = req.params.id;
  let book = await getOne$9(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
async function add$4(req, res) {
  const author = req.body.author;
  const ganre = req.body.ganre;
  const name_book = req.body.name_book;
  const amount = req.body.amount;
  let response = await add$9(author,ganre,name_book,amount);
  res.json(response);
}
async function update$4(req, res){
  const id = req.params.id;
  const el = req.body;
  let update =  await update$9(id, el);
  res.json(update);
}
async function remove$4(req, res) {
  const id = req.params.id;
  let book = await remove$9(id);
  res.json(book);
}

async function getAll$3(req, res) {
  let book = await getAll$8();
  res.json(book);
}
async function getOne$3(req, res) {
  const id = req.params.id;
  let book = await getOne$8(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
async function add$3(req, res) {
  const author_birthday = req.body.author_birthday;
  const ful_name_author = req.body.ful_name_author;
  let response = await add$8(ful_name_author, author_birthday);
  res.json(response);
}
async function update$3(req, res){
  const id = req.params.id;
  const el = req.body;
  let update =  await update$8(id, el);
  res.json(update);
}
async function remove$3(req, res) {
  const id = req.params.id;
  let book = await remove$8(id);
  res.json(book);
}

async function getAll$2(req, res) {
  let book = await getAll$7();
  res.json(book);
}
async function getOne$2(req, res) {
  const id = req.params.id;
  let book = await getOne$7(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
async function add$2(req, res) {
  const ganre_description = req.body.ganre_description;
  const ganre_name = req.body.ganre_name;
  let response = await add$7(ganre_description, ganre_name);
  res.json(response);
}
async function update$2(req, res){
  const id = req.params.id;
  const el = req.body;
  let update =  await update$7(id, el);
  res.json(update);
}
async function remove$2(req, res) {
  const id = req.params.id;
  let book = await remove$7(id);
  res.json(book);
}

async function getAll$1(req, res) {
  let book = await getAll$6();
  res.json(book);
}
async function getOne$1(req, res) {
  const id = req.params.id;
  let book = await getOne$6(id);
  res.json(book);
}
/**
 *
 * @param {import('express').Request} req
 * @param {*} res
 */
async function add$1(req, res) {
  const name = req.body.name;
  const surname = req.body.surname;
  const patronymic = req.body.patronymic;
  const address = req.body.address;
  const passport = req.body.passport;
  const phone = req.body.phone;
  let response = await add$6(
    name,
    surname,
    patronymic,
    address,
    passport,
    phone
  );
  res.json(response);
}
async function update$1(req, res) {
  const id = req.params.id;
  const el = req.body;
  let update = await update$6(id, el);
  res.json(update);
}
async function remove$1(req, res) {
  const id = req.params.id;
  let book = await remove$6(id);
  res.json(book);
}

async function getAll(req, res) {
  let book = await getAll$5();
  res.json(book);
}
async function getOne(req, res) {
  const id = req.params.id;
  let book = await getOne$5(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
async function add(req, res) {
  const reader = req.body.reader;
  const book = req.body.book;
  const date_in = req.body.date_in;
  const date_out = req.body.date_out;
  const ret = req.body.ret;
  const date_out_real = req.body.date_out_real;
  let response = await add$5(reader, book, date_in, date_out, ret, date_out_real);
  res.json(response);
}
async function update(req, res){
  const id = req.params.id;
  const el = req.body;
  let update =  await update$5(id, el);
  res.json(update);
}
async function remove(req, res) {
  const id = req.params.id;
  let book = await remove$5(id);
  res.json(book);
}

// import {}
const booksRouter = express.Router();
booksRouter.get("/", getAll$4);
booksRouter.get("/:id", getOne$4);
booksRouter.post("/add", add$4); 
booksRouter.put("/update/:id", update$4); 
booksRouter.delete("/delete/:id", remove$4);

// import {}
const authorRouter = express.Router();
authorRouter.get("/", getAll$3);
authorRouter.get("/:id", getOne$3);
authorRouter.post("/add", add$3); 
authorRouter.put("/update/:id", update$3); 
authorRouter.delete("/delete/:id", remove$3);

// import {}
const ganreRouter = express.Router();
ganreRouter.get("/", getAll$2);
ganreRouter.get("/:id", getOne$2);
ganreRouter.post("/add", add$2); 
ganreRouter.put("/update/:id", update$2); 
ganreRouter.delete("/delete/:id", remove$2);

// import {}
const readersRouter = express.Router();
readersRouter.get("/", getAll$1);
readersRouter.get("/:id", getOne$1);
readersRouter.post("/add", add$1); 
readersRouter.put("/update/:id", update$1); 
readersRouter.delete("/delete/:id", remove$1);

// import {}
const movingsRouter = express.Router();
movingsRouter.get("/", getAll);
movingsRouter.get("/:id", getOne);
movingsRouter.post("/add", add); 
movingsRouter.put("/update/:id", update); 
movingsRouter.delete("/delete/:id", remove);

const appRouter = express.Router();
appRouter.use("/books", booksRouter);
appRouter.use("/authors", authorRouter);
appRouter.use("/ganers", ganreRouter);
appRouter.use("/readers", readersRouter);
appRouter.use("/movings", movingsRouter);

const app = express();
const port = 666;
app.use(express.json());
app.use(
  cors({
    origin: /localhost/,
  })
);
app.use("/", appRouter);

app.listen(port, async () => {
  console.log(port);
  db.connection = await mssql.connect({
    database: "library",
    server: "HP39-6",
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
    },
  });
});
