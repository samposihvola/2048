let points = 0;

const pointCalculation = (number) => {
	if (number > 0) {
		points += number;
	} if (number === 0)  {
		points = 0
	}
	return points;
};

export default pointCalculation;
