// Reduce exercises - https://coursework.vschool.io/array-reduce-exercises/

// 5) Given an array of arrays, flatten them into a single array

var arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flattenArrays = arr => {
	return arr.reduce((a, b) => {
		// Way A:
		//return a.concat(b);
		// Way B:
		for (const i of b) {
			a.push(i);
		}
		return a;
	}, []);
};
