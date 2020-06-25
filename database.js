const { Client } = require("pg")
const client = new Client({
  user: "postgres",
  password: "!QAZ2wsx",
  host: "172.16.7.6",
  database: "namegator",
  port: 5432
});

client.connect();

exports.execute = function (query, values) {
  return new Promise(function (resolve, reject){
    client.query(query, values, function(err, res){
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }      
    });
  });
};
