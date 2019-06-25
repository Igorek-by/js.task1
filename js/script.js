var fruits = ['Яблоко', 'Груша', 'Слива'];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);

fruits[1] = 'Дыня';
console.log(fruits);

fruits[10] = 'Огурец';
console.log(fruits);
console.log(fruits[5]);

fruits['other'] = 'Арбуз';
console.log(fruits);

console.log(fruits.length);

var arr2 = [,,,];
console.log(arr2);
console.log(arr2.length);

var arr3 = [4,5,6,,,8,];
console.log(arr3.length);

fruits.length = 3;
console.log(fruits);

var fruits2 = new Array();

var fruits3 = new Array('Яблоко', 'Груша');

var arrNum = new Array(45,5,6,7,8);
console.log(arrNum);

var arrNum2 = new Array(16);
console.log(arrNum2);

var matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
console.log(matrix);
console.log(matrix[1][1]);