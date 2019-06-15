const countPal = (string, search) => {

  string += ""
  search += ""

  var count = 0,
      position = 0

for(let i = 0; i < 2; i++){
  if(i == 1)
  	string = string.split().reverse().join()

  while (true) {
    position = string.indexOf(search, position);
    if (position >= 0) {
      count++
      position += 1
    } else break
  }
}
  return count
}

console.log(countPal('banananana', 'nana'))