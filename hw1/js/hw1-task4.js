 let credits = 23580;
 let pricePerDroid = 3000;

 const questDroids = prompt('Сколько дроидов вы хотите приобрести?');
const totalDroids = Number(questDroids) * pricePerDroid;
const balance = credits - questDroids * pricePerDroid;
if (questDroids === null) {
	console.log('Отменено пользователем!');
}
if (totalDroids > credits) {
	console.log('Недостаточно средств на счету!');
}
if (totalDroids <= credits) {
	console.log(alert(`Вы купили ${questDroids} дроидов, на счету осталось ${balance} кредитов.`));
}