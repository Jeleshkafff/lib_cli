import { booksService } from "../services";

export async function getAll(req, res) {
  let book = await booksService.getAll();
  res.json(book);
}
export async function getOne(req, res) {
  const id = req.params.id;
  let book = await booksService.getOne(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
export async function add(req, res) {
  const author = req.body.author
  const ganre = req.body.ganre
  const name_book = req.body.name_book
  const amount = req.body.amount
  let response = await booksService.add(author,ganre,name_book,amount)
  res.json(response)
}
export async function update(req, res){
  const id = req.params.id;
  const el = req.body
  let update =  await booksService.update(id, el)
  res.json(update)
}
export async function remove(req, res) {
  const id = req.params.id;
  let book = await booksService.remove(id);
  res.json(book);
}