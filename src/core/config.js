const seconds = 60;
const milliSeconds = 1000;
const minutes = 0.5;
const themes = ['Default', 'Light', 'Dark'];

const config = {
	idlength: 16,
	input: '',
	refreshIdLength: 4,
	tickerDelay: milliSeconds * seconds * minutes,
	maxTaskCount: 3,
	themes: themes,
};

export default config;
