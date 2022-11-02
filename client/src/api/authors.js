export const getAll = async () => {
    let authors = await fetch("http://localhost:666/authors", {
      mode: "cors",
    });
    return authors.json();
  };