export default function add(numbers) {
	let negativeNumbers = [],
		sum = 0,
		numbersArray = getNumbers(numbers);

	if(numbersArray.length === 0) return 0;

	for(let i = 0; i < numbersArray.length; i++) {
		const currentNumber = Number(numbersArray[i]);

		if(currentNumber >= 0) {
			sum += currentNumber;
		} else {
			negativeNumbers.push(currentNumber);
		}

	}

	if(negativeNumbers.length > 0) throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
	return sum;
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