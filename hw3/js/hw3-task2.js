const countProps = function(obj) {
	let total = 0;
	const key = Object.values(obj);
	const mass = [ ...key ];
	for (let i = 0; i < mass.length; i += 1) {
		if (mass[i]) {
			total += 1;
		}
	}
	return total;
};