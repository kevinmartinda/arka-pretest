const countTreeHeight = (x, y) => {
	if(x < 0 || y <= 0){
		return "panjang dan tahun harus lebih dari 0"
	}
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