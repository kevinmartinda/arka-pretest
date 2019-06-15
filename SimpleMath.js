const simpleMath = budget => {
	const price = 2500

	let sum = budget / price
	sum += sum / 4

	return sum
}

console.log(simpleMath(50000))