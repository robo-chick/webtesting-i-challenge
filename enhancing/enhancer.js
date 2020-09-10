module.exports = {
  success,
  fail,
  repair,
  get,
}

function success(item) {
  const newEnhancementLvl = item.enhancement < 20 ? item.enhancement + 1 : 20
  return { ...item, enhancement: newEnhancementLvl }
}

function fail(item) {
 
  let newDurability = item.durability - 1 // set the base case(numbers greater than 16)
  if (item.enhancement < 15) newDurability = item.durability - 5 // first check and reassignment
  else if (item.enhancement === 15 || item.enhancement === 16) newDurability = item.durability - 10 // second check and reassignment

  return { ...item, durability: newDurability }
}

function repair(item) {
  return { ...item, durability: 100 }
}

function get(item) {
  let name = item.name
  if (item.enhancement > 0) name = `[+${item.enhancement}] ${item.name}`
  return { ...item, name: name }
}