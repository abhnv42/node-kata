export default function add(numbers) {
	let numbersArray = getNumbers(numbers);
	if(numbersArray.length === 0) return 0;
	return numbersArray.reduce((acc, number) => acc + number, 0);
}

function getNumbers(numbers) {
	if(numbers.length === 0) return [];
	return parseNumbers(numbers);
}

function parseNumbers(numbers) {
	const CUSTOM_DELIMITER = numbers.match(new RegExp("(?<=^//)."));
	let delimiter;

	if(CUSTOM_DELIMITER) {
		delimiter = new RegExp(`,|\\n|${CUSTOM_DELIMITER}`);
		numbers = numbers.replace(/^\/\/.\n/, "");
	} else {
		delimiter = new RegExp(",|\\n");
	}

	return numbers.split(delimiter).map(number => Number(number));
}