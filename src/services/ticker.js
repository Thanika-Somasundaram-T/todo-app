import context from '../core/context';
import config from '../core/config';
import TaskRetriever from './taskRetriever';

const start = () => {
	const { addTask } = context.actions;

	setInterval(() => {
		TaskRetriever.getTasks().map(addTask);
	}, config.tickerDelay);
};

const Ticker = {
	start,
};

export default Ticker;
