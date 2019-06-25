console.log('Перебор массивов');

var fruits = ['Яблоко', 'Груша', 'Слива'];
for (var i = 0; i < fruits.length; i++) {
	document.write('<p>' + fruits[i] + '</p>');
}

var i = fruits.length;
while(i-- != 0) {
	document.write('<p>' + fruits[i] + '</p>');
}

var newArr = [];

for(var i = 0; i < 100; i++) {
	newArr[i] = (i+1);
}
console.log(newArr);