function findSummands(numbers, target){
	var A = new Object();
	for (var i=0; i<numbers.length; i++){
		var current = numbers[i];
		 
		if (A[current] == null){
			//Now if we meet later a value equal to (target-current), we'll get our result
			A[target-current] = i;
		}
		else{
			//We have a match so let's return the current index and the saved one
			return [A[current], i];
		}
	}
	
	return null;
}


//Some simple tests
console.log(findSummands([2, 7, 11, 15], 22));
console.log(findSummands([1, 2, 3, 1, -1, 0], 0));
console.log(findSummands([1, 4, 3, 8, 11, 5, 0], 8));
