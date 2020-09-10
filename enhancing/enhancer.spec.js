const enhancer = require('./enhancer.js');
// test away!

describe("Repairs item", () => {
    it("Should set items durability to 100", () => {
        const item = {enhancement: 10, durability: 20}
        const repairedItem = enhancer.repair(item)
        expect(repairedItem.durability).toBe(100)
    })
})

describe("Enhances item", function () {
    // on success enhancement increases by one limiting at 20
    // on fail enhancement as e < 15 durability as d -= 5 || e === 15 e === 16 d -= 10 || d -= 1
    it("Should succeed in enhancement", () => {
        const item = {enhancement: 20, durability: 100}
        const newItem = enhancer.success(item)
        expect(newItem.enhancement).toBe(20)
    })
    it("Should succeed in enhancement setting enhancement to 11", () => {
        const item = {enhancement: 10, durability: 100}
        const newItem = enhancer.success(item)
        expect(newItem.enhancement).toBe(11)
    })
    it("Should fail in enhancement setting durability to 95", () => {
        const item = {enhancement: 10, durability: 100}
        const newItem = enhancer.fail(item)
        expect(newItem.durability).toBe(95)
    })
    it("Should fail in enhancement setting durability to 90", () => {
        const item = {enhancement: 15, durability: 100}
        const newItem = enhancer.fail(item)
        expect(newItem.durability).toBe(90)
    })
    it("Should fail in enhancement setting durability to 99", () => {
        const item = {enhancement: 20, durability: 100}
        const newItem = enhancer.fail(item)
        expect(newItem.durability).toBe(99)
    })
})

describe("Gets item", () => {
    it("Should get an item with the name set to [+7] Bronze Sword", () => {
        const item = {enhancement: 7, durability: 100, name: "Bronze Sword"}
        const newItem = enhancer.get(item)
        expect(newItem.name).toBe("[+7] Bronze Sword")
    })

    it("Should get an item with the name set to Bronze Sword", () => {
        const item = {enhancement: 0, durability: 100, name: "Bronze Sword"}
        const newItem = enhancer.get(item)
        expect(newItem.name).toBe("Bronze Sword")
    })
})

