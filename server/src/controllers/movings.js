import { movingsService } from '../services';

export async function getAll(req, res) {
  let book = await movingsService.getAll();
  res.json(book);
}
export async function getOne(req, res) {
  const id = req.params.id;
  let book = await movingsService.getOne(id);
  res.json(book);
}
/**
 * 
 * @param {import('express').Request} req 
 * @param {*} res 
 */
export async function add(req, res) {
  const reader = req.body.reader
  const book = req.body.book
  const date_in = req.body.date_in
  const date_out = req.body.date_out
  const ret = req.body.ret
  const date_out_real = req.body.date_out_real
  let response = await movingsService.add(reader, book, date_in, date_out, ret, date_out_real)
  res.json(response)
}
export async function update(req, res){
  const id = req.params.id;
  const el = req.body
  let update =  await movingsService.update(id, el)
  res.json(update)
}
export async function remove(req, res) {
  const id = req.params.id;
  let book = await movingsService.remove(id);
  res.json(book);
}