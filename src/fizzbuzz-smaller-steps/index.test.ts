import { fizzbuzz, fizzbuzzComplete } from "./index";

describe("fizzbuzz", () => {
    it("should transform regular numbers to their string representation", () => {
        expect(fizzbuzz(1)).toEqual("1")
        expect(fizzbuzz(2)).toEqual("2")
        expect(fizzbuzz(4)).toEqual("4")
    });

    it("should transform numbers dividable by 3 too Fizz", () => {
        expect(fizzbuzz(3)).toEqual("Fizz")
        expect(fizzbuzz(6)).toEqual("Fizz")
        expect(fizzbuzz(9)).toEqual("Fizz")
        expect(fizzbuzz(18)).toEqual("Fizz")
    });

    it("should transform numbers dividable by 5 too Fizz", () => {
        expect(fizzbuzz(5)).toEqual("Buzz")
        expect(fizzbuzz(10)).toEqual("Buzz")
        expect(fizzbuzz(20)).toEqual("Buzz")
    });

    it("should transform numbers dividable by 15 too Fizz", () => {
        expect(fizzbuzz(15)).toEqual("FizzBuzz")
        expect(fizzbuzz(30)).toEqual("FizzBuzz")
        expect(fizzbuzz(45)).toEqual("FizzBuzz")
    });

    it("should return the correct number of lines", () => {
        expect(fizzbuzzComplete().split("\n")).toHaveLength(100)
    })
});
