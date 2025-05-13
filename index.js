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
	let [delimiter, finalNumbers] = getDelimiter(numbers);
	return finalNumbers.split(delimiter).map(number => Number(number));
}

function getDelimiter(numbers) {
	let delimiter;
	const GET_CUSTOM_DELIMITER = new RegExp("(?<=^//).*(?=\n)");
	const REMOVE_CUSTOM_DELIMITER_DECLARATION = new RegExp("^//.*\n");

	const CUSTOM_DELIMITER = numbers.match(GET_CUSTOM_DELIMITER);

	if(CUSTOM_DELIMITER) {
		delimiter = new RegExp(`,|\\n|${CUSTOM_DELIMITER}`);
		numbers = numbers.replace(REMOVE_CUSTOM_DELIMITER_DECLARATION, "");
	} else {
		delimiter = new RegExp(",|\\n");
	}

	return [delimiter, numbers];
}