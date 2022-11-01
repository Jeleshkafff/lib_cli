export const getAll = async () => {
  let books = await fetch("http://localhost:666/books", {
    mode: "cors",
  });
  return books.json();
};
export const getOne = async (id) => {
  let books = await fetch(`http://localhost:666/books/${id}`, {
    mode: "cors",
  });
  return books.json();
};
export const add = async (author, ganre, name_book, amount) => {
  let books = await fetch(`http://localhost:666/books/add`, {
    mode: "cors",
    body: JSON.stringify({ author, ganre, name_book, amount }),
  });
  return books.json();
};
export const update = async (id, newElem) => {
  let books = await fetch(`http://localhost:666/books/update/${id}`, {
    mode: "cors",
    body: JSON.stringify(newElem),
  });
  return books.json();
};
export const remove = async (id) => {
  let books = await fetch(`http://localhost:666/books/delete/${id}`, {
    mode: "cors",
  });
  return books.json();
};
