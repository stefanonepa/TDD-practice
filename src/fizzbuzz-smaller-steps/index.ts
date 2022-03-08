export function fizzbuzz(n: number): string {
    if(n % 15 === 0) {
        return "FizzBuzz"
    }

    if(n % 5 === 0) {
        return "Buzz"
    }

    if(n % 3 === 0) {
        return "Fizz"
    }
    return n.toString()
}

export function fizzbuzzComplete(): string {
    return Array.from(Array(100).keys())
        .map(x => x + 1)
        .map(fizzbuzz)
        .join("\n")
}
