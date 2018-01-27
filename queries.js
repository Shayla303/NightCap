const db = require('./connection')

function getItems() {
  return db ('menu').select();
}








module.exports = {
  getItems,
}
