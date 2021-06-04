import context from '../core/context';
import config from '../core/config';

const start = () => {
	setInterval(() => {
		context.actions.addTask('New Task');
	}, config.tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
