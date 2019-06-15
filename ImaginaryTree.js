const countTreeHeight = (x, y) => {
	let tinggi = x
	for(let i = 0; i < y; i++){
		//semi
		tinggi *= 2

		//gugur
		tinggi++
	}
	return tinggi
}

console.log(countTreeHeight(2, 7))