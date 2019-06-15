const sorting = array => {
	const max = array.reduce((x, y) => (x > y ? x : y))
	console.log(`max: ${max}`)

	const min = array.reduce((x, y) => (x < y ? x : y))
	console.log(`min: ${min}`)

	const sortmin = array.sort(function(a, b){return a-b});
	console.log("Ascending:")
	console.log(...sortmin)

	const sortmax = array.sort(function(a, b){return b-a});
	console.log("Descending:")
	console.log(...sortmax)
}

sorting([21,1,32,54,12,36,74,21,34,21,65])