import context from '../core/context';
import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const { idlength } = config;

const getTaskId = (text) => ({
	id: rndString(idlength),
	text: text,
});

const init = () =>
	context.actions.setTask([
		getTaskId('Task1'),
		getTaskId('Task2'),
		getTaskId('Task3'),
	]);

const removeTask = (tasks, task) =>
	tasks.filter((Task) => Task.id !== task.id);

const addTask = (tasks, task) => (
	task === ''
		? tasks
		: tasks.concat(getTaskId(task))
);

const TaskManager = {
	init,
	removeTask,
	addTask,
};

export default TaskManager;
