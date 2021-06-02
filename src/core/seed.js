import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	input: config.input,
	refreshID: rndString(refreshIDLength),
	todos: [],
	filter: 'all',
	editing: null,
	tasks: [],
};

export default seed;
