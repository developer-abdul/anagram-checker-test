// Example:
// Silent : Listen

// Write javascript function that would return inputed strings are anagram or not

const anagramChecker = (word, compareWord) => {
	const wordArr = normalizeAndSort(word);
	const compareWordArr = normalizeAndSort(compareWord);

	return wordArr === compareWordArr;
};

const normalizeAndSort = (str) => {
	return str
		.replace(/\s+/g, '') // Remove spaces
		.toLowerCase() // Convert to lowercase
		.split('') // Split into characters
		.sort() // Sort the characters
		.join(''); // Join back into a string
};

console.log(annagramChecker('Silent', 'Listen'));

// annagramChecker('Stilent', 'Listent');
