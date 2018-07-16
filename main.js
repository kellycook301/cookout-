let hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
};
let zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
};
let chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
};
let corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
};
let steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
};

let uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];
let cookedFood = [];

let grill = currentObject => {
	currentObject.cooked = true;
	cookedFood.push(currentObject);
};

for (let i = 0; i < uncookedFood.length; i++) {
  grill(uncookedFood[i]);
}
console.log(uncookedFood);

// console.log('CookedFood array after our loop ran!: ', cookedFood);