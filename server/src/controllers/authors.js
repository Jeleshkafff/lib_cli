import { authorService } from "../services";

export async function getAll(req, res) {
  let book = await authorService.getAll();
  res.json(book);
}
export async function getOne(req, res) {
  const id = req.params.id;
  let book = await authorService.getOne(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
export async function add(req, res) {
  const author_birthday = req.body.author_birthday
  const ful_name_author = req.body.ful_name_author
  let response = await authorService.add(ful_name_author, author_birthday)
  res.json(response)
}
export async function update(req, res){
  const id = req.params.id;
  const el = req.body
  let update =  await authorService.update(id, el)
  res.json(update)
}
export async function remove(req, res) {
  const id = req.params.id;
  let book = await authorService.remove(id);
  res.json(book);
}