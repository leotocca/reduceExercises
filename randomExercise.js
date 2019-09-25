// Random Exercise - Get the total population out of the following countries object:

const countriesData = [
	{
		country: 'China',
		population: 1409517397
	},
	{
		country: 'India',
		population: 1339180127
	},
	{
		country: 'USA',
		population: 324459463
	},
	{
		country: 'Indonesia',
		population: 263991379
	}
];

const countriesPopulation = obj => {
	return obj.reduce((a, b) => a + b.population, 0);
};
