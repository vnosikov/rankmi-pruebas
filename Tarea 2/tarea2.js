function translateExcelCode(code){
	code = code.toUpperCase();
	var result = 0;
	for(var i=0; i< code.length; i++){
		//Char code of A is 65, so we'll transform every letter to a number and then get a total value
		var n = code.charCodeAt(code.length-i-1)-64;
		if(n<1 || n>26){
			return null;			//Incorrect symbol in an input
		}
		result += n * Math.pow(26,i);
	}
	
	return result;
}

//Some simple tests
console.log(translateExcelCode("Z"));
console.log(translateExcelCode("ab"));
console.log(translateExcelCode("AAZ"));