import { rndBetween } from '@laufire/utils/random';
import faker from 'faker';
import config from '../core/config';

const toProperCase = (text) =>
	text.charAt(0).toUpperCase() + text.substr(1);

const getRndTask = () =>
	toProperCase(`${ faker.hacker.verb() } ${ faker.hacker.noun() }.`);

const getTasks = () => {
	const getCount = rndBetween(0, config.maxTaskCount);
	const tasks = [];

	for(let i = 0; i < getCount;i++)
		tasks.push(getRndTask());

	return tasks;
};

const TaskRetriever = {
	getTasks,
};

export default TaskRetriever;
