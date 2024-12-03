
function toCapitalize(strParam) {
	
	result = (strParam.toLowerCase()).replace(strParam[0], strParam[0].toUpperCase());
	return result;
}

function returnLast(strParam) {
	return strParam[strParam.length - 1];
}


let strVar = "helLo wOrld!";

console.log(toCapitalize(strVar));
console.log(returnLast(strVar));
