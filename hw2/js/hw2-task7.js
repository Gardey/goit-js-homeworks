const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
    let valid;
	if (login.length < 4 || login.length > 16) {
		valid = false;
	} else {
		valid = true;
	}
	return valid;
};

const isLoginUnique = function(allLogins, login) {
    return !allLogins.includes(login);
};

const addLogin = function(allLogins, login) {
    let result;
	if (isLoginValid(login) === false) {
		result = 'Ошибка! Логин должен быть от 4 до 16 символов';
	} else if (isLoginUnique(allLogins, login) === false) {
		result = 'Такой логин уже используется!';
	} else {
		allLogins.push(login);
		result = 'Логин успешно добавлен!';
	}
	return result;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'