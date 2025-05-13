export default function add(numbers) {
	let numbersArray = getNumbers(numbers);
	if(numbersArray.length === 0) return 0;
	return numbersArray.reduce((acc, number) => acc + number, 0);
}

function getNumbers(numbers) {
	if(numbers.length === 0) return [];
	return [Number(numbers)];
}