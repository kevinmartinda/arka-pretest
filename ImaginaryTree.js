const countTreeHeight = (x, y) => {
	let tinggi = x
	for(let i = 0; i < y; i++){
		for(let j = 0; j < 2; j++){
		//semi
		tinggi += tinggi

		//gugur
		tinggi++
		}
	}
	return tinggi
}

console.log(countTreeHeight(2, 2))