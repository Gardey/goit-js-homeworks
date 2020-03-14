const logItems = function(array) {
    let counter = 0;
	for (const item of array) {
		console.log(`${item} - ${(counter += 1)}`);
	}
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);