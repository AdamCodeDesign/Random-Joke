const jokes = require("../data/jokes.json");

function getAll() {
  return new Promise((resolve, reject) => {
    resolve(jokes);
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    const joke = jokes.find((el) => el.id === parseInt(id));
    return joke ? resolve(joke) : reject("Joke with id: " + id + " not found");
  });
}

module.exports = {
  getAll,
  getById,
};
