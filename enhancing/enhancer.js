module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const newEnhancementLvl1 = item.enhancement < 20 ? item.enhancement + 1 : 20
  return {...item, enhancement: newEnhancementLvl1}
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
