const ADMIN_PASSWORD = 'jqueryismyjam';
let input = prompt('Please, enter password');
let message;

if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else if (input === null) {
    message = 'Отменено пользователем!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);
alert(message);