const country = prompt('В какую страну будет совершена доставка?');
const inLowerCaseCountry = country.toLowerCase();
const china = 'китай';
const chili = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaika = 'ямайка';
let price;
console.log(inLowerCaseCountry);
switch (inLowerCaseCountry) {
	case china:
		price = 100;
		console.log(alert(`Доставка в ${country} будет стоить ${price} кредитов`));
		break;

	case chili:
		price = 250;
		console.log(alert(`Доставка в ${country} будет стоить ${price} кредитов`));
		break;

	case australia:
		price = 170;
		console.log(alert(`Доставка в ${country} будет стоить ${price} кредитов`));
		break;

	case india:
		price = 80;
		console.log(alert(`Доставка в ${country} будет стоить ${price} кредитов`));
		break;

	case jamaika:
		price = 120;
		console.log(alert(`Доставка в ${country} будет стоить ${price} кредитов`));
		break;

	default:
		console.log(alert('В вашей стране доставка не доступна!'));
}

