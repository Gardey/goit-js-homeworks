import users from './users.js';

const calculateTotalBalance = users => {
    const result = users.reduce((acc, el) => acc + el.balance, 0);
	return result;
    // твой код
  };
  
  console.log(calculateTotalBalance(users)); // 20916