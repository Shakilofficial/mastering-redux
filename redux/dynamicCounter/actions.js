const { DDECREMENT, DINCREMENT } = require("./actionTypes");

const dincrement = () => {
  return {
    type: DINCREMENT,
  };
};

const ddecrement = () => {
  return {
    type: DDECREMENT,
  };
};

module.exports = {
  dincrement,
  ddecrement,
};
