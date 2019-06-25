var fruits = ['Яблоко', 'Груша', 'Слива'];
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Апельсин');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('Персик');
console.log(fruits);

fruits.push('Мандарин', 'Киви');
fruits.unshift('Клубника', 'Ананас');
console.log(fruits);

var arr = ['я', 'изучаю', 'JS'];
arr.splice(1, 1);
console.log(arr);

var arr2 = ['я','сейчас', 'изучаю', 'JS'];
arr2.splice(0, 3, 'Мы', 'изучаем');
console.log(arr2);

arr2.splice(2, 0, 'сложный', 'язык');
console.log(arr2);

arr2.splice(arr2.length, 0, 'Javascript');
console.log(arr2);

var arr3 = ['Почему', 'надо', 'учить', 'Javascript'];
var arr4 = arr3.slice(1, 3);
console.log(arr4);

var arr5 = arr3.slice(2);
console.log(arr5);


var arr6 = arr3;
console.log(arr6);

var names = "Маша, Петя, Иван, Марина, Катя, Саша, Дмитрий";
var arrNames = names.split(', ');
console.log(arrNames);

var strName = names.join('; ');
console.log(strName);

var arrNum = [3,1,0,-2,15];
arrNum.sort();
console.log(arrNum);

var arrNum = [3,1,0,-2,15];
arrNum.sort(function(a, b) {
	if (a > b) return true
	return false;
});
console.log(arrNum);

arrNum.reverse();
console.log(arrNum);

var arrNum = [1,2,3,4,5];
var arr2Num = [11,12,13];
var arrNewNum = arrNum.concat(arr2Num);
console.log(arrNewNum);

console.log(arrNames);
console.log(arrNames.indexOf('Дмитрий'));
console.log(arrNames.indexOf('Сергей'));
console.log(arrNames.lastIndexOf('Иван'));
