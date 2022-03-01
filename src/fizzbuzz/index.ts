export function fizzBuzz(): string {
  let result = "";
  for (let index = 0; index < 99; index++) {
    let currentLine = "";

    if (index % 3 === 0) {
      currentLine += "Fizz";
    }
    if (index % 5 === 0) {
      currentLine += "Buzz";
    }

    if (!currentLine) {
      currentLine += index + 1;
    }

    result += currentLine + "\n";
  }
  return result;
}
