let names = [
[
['куры', 'гуси', 'павлины'],
['сокол', 'орел', 'соловей']
],
[
['собака', 'кошка'],
['обезьяна', 'рысь'],
]
]

function flat(x) {
	let newArr=[];
	if (Array.isArray(x)){
		for (let a=0;a<x.length;a++){
    		Array.prototype.push.apply(newArr, flat(x[a]))
    	} 
   	} else {newArr.push(x)}
   	return newArr
}

let finalArr=flat(names)
console.log(finalArr)

for(let c of finalArr){
	console.log(c)
}

//2 варианта решения

/* for (let a=0;a<names.length;a++){
	if (Array.isArray(names[a])) {
		for (let b=0;b<names[a].length;b++){
			if (Array.isArray(names[a][b])){
				for (let c=0;c<names[a][b].length;c++){
					console.log (names[a][b][c]) 
				}
			}else console.log (names[a][b])
		}
	} else console.log (names[a])
} */



