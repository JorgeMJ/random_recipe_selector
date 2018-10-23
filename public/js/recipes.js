const recipes = {
	1: {
		id: 1,
		name: "recipe1",
		kind: "Meat",
		time: "150",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	2: {
		id: 2,
		name: "recipe2",
		kind: "Fish",
		time: "20",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	3: {
		id: 3,
		name: "recipe3",
		kind: "Pasta",
		time: "45",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	4: {
		id: 4,
		name: "recipe4",
		kind: "Vegetables/Fruit",
		time: "30",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	5: {
		id: 5,
		name: "recipe5",
		kind: "Soup",
		time: "60",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	6: {
		id: 6,
		name: "recipe6",
		kind: "Salad",
		time: "45",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	7: {
		id: 7,
		name: "recipe7",
		kind: "Legumes",
		time: "90",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	8: {
		id: 8,
		name: "recipe8",
		kind: "Rice",
		time: "120",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	9: {
		id: 9,
		name: "recipe9",
		kind: "Vegetables/Fruit",
		time: "60",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	10: {
		id: 10,
		name: "recipe10",
		kind: "Dessert",
		time: "150",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	11: {
		id: 11,
		name: "recipe11",
		kind: "Soup",
		time: "20",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	12: {
		id: 12,
		name: "recipe12",
		kind: "Salad",
		time: "45",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	13: {
		id: 13,
		name: "recipe13",
		kind: "Meat",
		time: "30",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "fgegb rrterte tnertvr fgegb rrterte tnertvr fgegb rrterte tnertvr fgegb rrterte tnertvr "
	},

	14: {
		id: 14,
		name: "recipe14",
		kind: "Fish",
		time: "45",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	15: {
		id: 15,
		name: "recipe15",
		kind: "Legumes",
		time: "90",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	16: {
		id: 16,
		name: "recipe16",
		kind: "Rice",
		time: "45",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	17: {
		id: 17,
		name: "recipe17",
		kind: "Rice",
		time: "50",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	18: {
		id: 18,
		name: "recipe18",
		kind: "Pasta",
		time: "60",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	19: {
		id: 19,
		name: "recipe19",
		kind: "Vegetables/Fruit",
		time: "45",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	20: {
		id: 20,
		name: "recipe20",
		kind: "Dessert",
		time: "60",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	},

	21: {
		id: 21,
		name: "recipe21",
		kind: "Bread/Baked",
		time: "150",
		ingredients: "ingredient 1, ingredient 2, ingredient 3, ingredient 4, ingredient 5",
		preparation: "this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe this is an example of the description of the recipe "
	}
}
