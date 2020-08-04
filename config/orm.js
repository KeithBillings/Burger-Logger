const connection = require('./connection');

const orm = {
  selectAll: function (callback) {
    connection.query(`SELECT * FROM burgers`,
      function (err, res) {
        if (err) throw err;
        callback(res);
      })
  },
  insertOne: function (burger_name, devoured, callback) {
    connection.query(
      `INSERT INTO burgers (burger_name, devoured) 
      VALUES ('${burger_name}', ${devoured});`,
      function (err, res) {
        if (err) throw err;
        callback(res);
      }
    )
  },
  updateOne: function (devoured, id, callback) {
    connection.query(
      `UPDATE burgers_db.burgers SET devoured = "${devoured}" WHERE id = "${id}"`,
      function (err, res) {
        if (err) throw err;
        callback(res);
      }
    )
  }
}

module.exports = orm;