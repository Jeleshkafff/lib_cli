import { ganreService } from '../services';

export async function getAll(req, res) {
  let book = await ganreService.getAll();
  res.json(book);
}
export async function getOne(req, res) {
  const id = req.params.id;
  let book = await ganreService.getOne(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
export async function add(req, res) {
  const ganre_description = req.body.ganre_description
  const ganre_name = req.body.ganre_name
  let response = await ganreService.add(ganre_description, ganre_name)
  res.json(response)
}
export async function update(req, res){
  const id = req.params.id;
  const el = req.body
  let update =  await ganreService.update(id, el)
  res.json(update)
}
export async function remove(req, res) {
  const id = req.params.id;
  let book = await ganreService.remove(id);
  res.json(book);
}