import { readersService } from "../services";

export async function getAll(req, res) {
  let book = await readersService.getAll();
  res.json(book);
}
export async function getOne(req, res) {
  const id = req.params.id;
  let book = await readersService.getOne(id);
  res.json(book);
}
/**
 *
 * @param {import('express').Request} req
 * @param {*} res
 */
export async function add(req, res) {
  const name = req.body.name;
  const surname = req.body.surname;
  const patronymic = req.body.patronymic;
  const address = req.body.address;
  const passport = req.body.passport;
  const phone = req.body.phone;
  let response = await readersService.add(
    name,
    surname,
    patronymic,
    address,
    passport,
    phone
  );
  res.json(response);
}
export async function update(req, res) {
  const id = req.params.id;
  const el = req.body;
  let update = await readersService.update(id, el);
  res.json(update);
}
export async function remove(req, res) {
  const id = req.params.id;
  let book = await readersService.remove(id);
  res.json(book);
}
