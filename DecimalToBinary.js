const decToBin = dec => {
	let status = true
	let x = 0
	let bin = []
	while(status){
		x = dec / 2
		if(x % 1 !== 0){
			bin.push(1)
			x-=0.5
		}else{
			bin.push(0)
		}
		dec = x
		if(dec === 0){
			status = false
		}
	}


	return bin.reverse().join('')
}

console.log(decToBin(100))