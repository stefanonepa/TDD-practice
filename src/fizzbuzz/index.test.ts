import { fizzBuzz } from "./index";

describe("FizzBuzz", () => {
  it("should create a string containing 100 lines", () => {
    //Arrange
    //Act
    const result = fizzBuzz();
    const lines = result.split("\n");
    //Assert
    expect(lines.length).toEqual(100);
  });

  it("should create a string containing 100 lines with numbers except for third, fifth and fifteenth lines", () => {
    //Arrange
    //Act
    const result = fizzBuzz();
    const lines = result
      .split("\n")
      .map((value, index) => {
        return [value, index];
      })
      .filter(([_, index]: [string, number]) => {
        return index % 3 !== 0;
      })
      .filter(([_, index]: [string, number]) => {
        return index % 5 !== 0;
      })
      .filter(([_, index]: [string, number]) => {
        return index % 15 !== 0;
      })
      .map(([value, index]: [string, number]) => {
        return Number(value) === index + 1 ? "ok" : "ko";
      });

    //Assert
    expect(lines).toEqual(
      expect.arrayContaining([expect.stringMatching(/^ok$/)])
    );
  });

  it("should contain fizz every three lines", () => {
    //Arrange
    //Act
    const result = fizzBuzz();
    const lines = result
      .split("\n")
      .map((value, index) => {
        return [value, index];
      })
      .filter(([_, index]: [string, number]) => {
        return index % 3 === 0;
      })
      .map(([value]) => {
        return value;
      });

    //Assert
    expect(lines).toEqual(
      expect.arrayContaining([expect.stringMatching(/^Fizz/)])
    );
  });

  it("should contain fizz every fifth lines", () => {
    //Arrange
    //Act
    const result = fizzBuzz();
    const lines = result
      .split("\n")
      .map((value, index) => {
        return [value, index];
      })
      .filter(([_, index]: [string, number]) => {
        return index % 5 === 0;
      })
      .map(([value]) => {
        return value;
      });

    //Assert
    expect(lines).toEqual(
      expect.arrayContaining([expect.stringMatching(/Buzz$/)])
    );
  });

  it("should contain fizz every fifteenth lines", () => {
    //Arrange
    //Act
    const result = fizzBuzz();
    const lines = result
      .split("\n")
      .map((value, index) => {
        return [value, index];
      })
      .filter(([_, index]: [string, number]) => {
        return index % 15 === 0;
      })
      .map(([value]) => {
        return value;
      });

    //Assert
    expect(lines).toEqual(
      expect.arrayContaining([expect.stringMatching(/^FizzBuzz$/)])
    );
  });
});
