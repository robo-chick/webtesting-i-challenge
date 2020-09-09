const enhancer = require('./enhancer.js');
// test away!

describe("Repairs item", () => {
    it("Should set items durability to 100", () => {
        const item = {enhancement: 10, durability: 20}
        const repairedItem = enhancer.repair(item)
        expect(repairedItem.durability).toEqual(100)
    })
})

describe("Enahnces item", () => {
    // on success enhancement increases by +1, limiting at 20
    it("should succeed in enhancement", () => {
        const item = {
            name: "sword",
            enhancement: 20, 
            durability: 100
        }
        const newItem = enhancer.success(item)
        expect(newItem.enhancement).toBe(20)
    })
})
