console.log('Циклы while и for');

var i = 1;
while (i < 3) {
	console.log(i);
	i++;
}

for (var i = 1; i < 10; i++) {
	console.log(i);
}

for (var i = 1; i < 10; i++) {
	if (i % 2 == 0) continue;
	console.log(i);

	if (i = 8) break;
}