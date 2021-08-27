/* eslint-disable max-statements */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import * as random from '@laufire/utils/random';
import TodoManager from './todoManager';

describe('test for todoManager', () => {
	const {
		addTodo,
		toggleTodo,
		removeTodo,
		toggleTodos,
		getActiveCount,
		getCompletedCount,
		getTodosCount,
		clearCompleted,
		getFilteredTodos,
		editTodo,
	} = TodoManager;

	test('check addTodo returns a same todos when text is empty', () => {
		const todos = [];
		const text = 'team';

		jest.spyOn(random, 'rndString');

		const result = addTodo(todos, text);

		expect(result).not.toEqual(todos);
		expect(result).toHaveLength(1);
		expect(random.rndString).toHaveBeenCalled();
		expect(result[0].text).toBe(text);
		expect(result[0].completed).toBeFalsy();
		expect(result[0].id).not.toBeUndefined();
	});

	test('check toggle button is working', () => {
		const data = {
			id: '1',
			text: 'team',
			completed: true,
		};
		const todos = [data];

		const result = toggleTodo(todos, data);

		expect(result).not.toEqual(todos);
		expect(result).toHaveLength(1);
		expect(result[0].completed).toEqual(!data.completed);
	});

	test('check whether the todo is removed', () => {
		const data = {
			id: '1',
			text: 'team',
			completed: true,
		};
		const todos = [data];

		const result = removeTodo(todos, data);

		expect(result).not.toEqual(todos);
		expect(result).toHaveLength(0);
	});

	test('check whether all check boxes on or off simultaneously', () => {
		const data = {
			id: '1',
			text: 'team',
			completed: true,
		};
		const todos = [data,
			{
				id: '2',
				text: 'work',
				completed: false,
			}];

		const result = toggleTodos(todos, false);

		expect(result).not.toEqual(todos);
		expect(result).toHaveLength(2);
		expect(result[0].completed).toBeFalsy();
		expect(result[1].completed).toBeFalsy();
	});
	test('check the active todos count', () => {
		const todos = [{
			id: '1',
			text: 'team',
			completed: true,
		},
		{
			id: '2',
			text: 'work',
			completed: false,
		},
		{
			id: '3',
			text: 'work',
			completed: false,

		}];

		const result = getActiveCount({ todos });

		expect(result).toEqual(2);
	});

	test('check the completed todos count', () => {
		const todos = [{
			id: '1',
			text: 'team',
			completed: true,
		},
		{
			id: '2',
			text: 'work',
			completed: false,
		},
		{
			id: '3',
			text: 'work',
			completed: false,

		}];

		const result = getCompletedCount({ todos });

		expect(result).toEqual(1);
	});

	test('check the total count of todos', () => {
		const todos = [{
			id: '1',
			text: 'team',
			completed: true,
		},
		{
			id: '2',
			text: 'work',
			completed: false,
		},
		{
			id: '3',
			text: 'work',
			completed: false,

		}];

		const result = getTodosCount({ todos });

		expect(result).toEqual(3);
	});

	test('check and filter the completed todos and return active todos', () => {
		const todos = [{
			id: '1',
			text: 'team',
			completed: true,
		},
		{
			id: '2',
			text: 'work',
			completed: false,
		},
		{
			id: '3',
			text: 'work',
			completed: false,

		}];

		const result = clearCompleted(todos);

		expect(result).toHaveLength(2);
	});

	test('check filters', () => {
		const todos = [{
			id: '1',
			text: 'team',
			completed: true,
		},
		{
			id: '2',
			text: 'work',
			completed: false,
		},
		{
			id: '3',
			text: 'work',
			completed: false,

		}];
		const filters = ['all', 'active', 'completed'];

		const result = filters.map((filter) => getFilteredTodos(todos, filter));

		expect(result[0]).toEqual(todos);
		expect(result[1]).toHaveLength(2);
		expect(result[2]).toHaveLength(1);
	});

	test('check editTodo returns editedTodos', () => {
		const todos = [
			{
				id: '2',
				text: 'work',
				completed: false,
			},
		];
		const edit = {
			id: '2',
			text: 'work',
			completed: false,
		};
		const text = 'leave';
		const result = editTodo(
			todos,
			edit,
			text
		);

		expect(result).not.toEqual(todos);
		expect(result).toHaveLength(1);
		expect(result[0].text).not.toEqual(todos[0].text);
	});
});
