const { query } = require("./database");
const database = require("./database");

const getUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([users]) => res.status(200).json(users))
    .catch((err) => console.error(err)
    )
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const image404 = "https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740";

  database
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([user]) => {
      if (user[0] != null){
        res.status(200).json(user[0]);
      } else {
        res.write("<div><h1 style='text-align:center;'>Not Found</h1><a href='/api/users'><button style='position: absolute; left: calc(50% - 50px); height: 30px; width: 100px; border:none; box-shadow: 3px 3px 5px rgba(0, 0, 0, .5);'> <<< USERS</button></a></div>");
        res.write("<img src=" + image404 + " style='width: 100vw;'></img>");
        res.status(404).send();
      }
    })
    .catch((err) => console.error(err))
};

module.exports = {
  getUsers,
  getUserById,
};
