let db;
//create a new db request
const request = indexedDB.open("populate", 1);

request.onupgradeneeded = function (event) {
  db.createObjectStore("pending", { autoIncrement: true });
};
