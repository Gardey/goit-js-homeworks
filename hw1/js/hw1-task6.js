let input;
let total = 0;
do {
	input = prompt('Введите число!');
	console.log(input);
	total += Number(input);
} while (input !== null);
console.log(alert(`Общая сумма чисел равна ${total}`));