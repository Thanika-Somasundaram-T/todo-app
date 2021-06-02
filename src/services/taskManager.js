import context from '../core/context';
import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const { idlength } = config;

const getTaskID = (text) => ({
	id: rndString(idlength),
	text: text,
});

const init = () =>
	context.actions.setTask([
		getTaskID('Task1'),
		getTaskID('Task2'),
		getTaskID('Task3'),
	]);

const TaskManager = {
	init,
};

export default TaskManager;
