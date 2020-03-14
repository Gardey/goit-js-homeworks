let input;
const numbers = [];
let total = 0;
let result;
do {
	input = prompt('Введите число.');
	if (!Number.isNaN(Number(input)) && input !== null) {
		numbers.push(input);
	}
	console.log(numbers);
} while (input !== null);
for (const item of numbers) {
	result = total += Number(item);
	console.log(result);
}
if (numbers.length === 0) {
	alert('Вы ничего не ввели!');
} else {
	console.log(result);
}
alert(total);