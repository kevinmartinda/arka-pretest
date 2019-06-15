const sikuSiku = len => {

	const prime = [2]

	let x = 3
	while (prime.length < len) {
        if ( isPrime(x) ) {
            prime.push(x);
        }
    x++
    }

    console.log(...prime)

	for(let i = 0; i < len; i++){
		for (let j = 0; j < i; j++) {
			document.write(prime[j])
		}
		document.write("<br>")
	}
}

const isPrime = num => {
	for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}