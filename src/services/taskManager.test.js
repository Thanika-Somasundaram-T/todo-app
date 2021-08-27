/* eslint-disable max-lines-per-function */
import TaskManager from './taskManager';
import * as random from '@laufire/utils/random';
import config from '../core/config';

describe('test for taskManager', () => {
	const { removeTask, addTask } = TaskManager;

	test('check removeTask removes task to be added in todo from tasks', () => {
		const tasks = [
			{
				id: '1',
				text: 'task1',
			},
			{
				id: '2',
				text: 'task2',
			},
		];
		const task = {
			id: '2',
			text: 'task2',
		};
		const result = removeTask(tasks, task);

		expect(result).not.toEqual(tasks);
		expect(result).toHaveLength(1);
		expect(result).toMatchObject([tasks[0]]);
	});

	test('check addTask concats task to tasks', () => {
		const tasks = [];
		const taskName = 'task1';

		jest.spyOn(random, 'rndString');

		const result = addTask(tasks, taskName);

		expect(random.rndString).toHaveBeenCalledWith(config.idlength);
		expect(result).not.toEqual(tasks);
		expect(result).toHaveLength(1);
		expect(result[0]).toHaveProperty('id');
	});
});
