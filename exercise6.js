// Reduce exercises - https://coursework.vschool.io/array-reduce-exercises/

var voters = [
	{ name: 'Bob', age: 30, voted: true },
	{ name: 'Jake', age: 32, voted: true },
	{ name: 'Kate', age: 25, voted: false },
	{ name: 'Sam', age: 20, voted: false },
	{ name: 'Phil', age: 21, voted: true },
	{ name: 'Ed', age: 55, voted: true },
	{ name: 'Tami', age: 54, voted: true },
	{ name: 'Mary', age: 31, voted: false },
	{ name: 'Becky', age: 43, voted: false },
	{ name: 'Joey', age: 41, voted: true },
	{ name: 'Jeff', age: 30, voted: true },
	{ name: 'Zack', age: 19, voted: false }
];

const countVotes = arr => {
	return obj.reduce((a, b) => {
		if (b.age >= 18 && b.age <= 25) {
			if (a.hasOwnProperty(youth)) {
				a.youth += 1;
			} else {
				a.youth = 1;
			}

			if (a.hasOwnProperty(youngVotes) && b.voted === true) {
				a.youngVotes += 1;
			} else if (!a.hasOwnProperty(youngVotes) && b.voted === true) {
				a.youngVotes = 1;
			}
		} else if (b.age >= 26 && b.age <= 35) {
			if (a.hasOwnProperty(mids)) {
				a.mids += 1;
			} else {
				a.mids = 1;
			}

			if (a.hasOwnProperty(midVotes) && b.voted === true) {
				a.midVotes += 1;
			} else if (!a.hasOwnProperty(midVotes) && b.voted === true) {
				a.midVotes = 1;
			}
		} else if (b.age >= 36 && b.age <= 55) {
			if (a.hasOwnProperty(olds)) {
				a.olds += 1;
			} else {
				a.olds = 1;
			}

			if (a.hasOwnProperty(oldVotes) && b.voted === true) {
				a.oldVotes += 1;
			} else if (!a.hasOwnProperty(oldVotes) && b.voted === true) {
				a.oldVotes = 1;
			}
		}

		return a;
	}, {});
};
