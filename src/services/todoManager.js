import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getTodo = (text) => ({
	id: rndString(config.idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) =>
	(text === '' ? todos : todos.concat(getTodo(text)));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	?	todo
	:	{
		...todo,
		completed: !data.completed,
	}
));

const removeTodo = (todos, data) =>
	todos.filter((currentData) => currentData.id !== data.id);

const toggleTodos = (todos, isChecked) =>
	todos.map((todo) => (
		{
			...todo,
			completed: isChecked,
		}
	));

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length === 0;

const getTodosCount = (todos) => todos.length === 0;

const clearCompleted = (todos) =>
	todos.filter((todo) => !todo.completed);

const getCompletedCount = (todos) =>
	todos.filter((todo) => todo.completed).length === 0;

const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};

const getFilteredTodos = (todos, fil) =>
	todos.filter(filters[fil]);

const editTodo = (
	todos, edit, text
) => todos.map((todo) => (
	todo.id !== edit?.id
		? todo
		: {
			...todo,
			text,
		}));

const TodoManager = {
	addTodo,
	clearCompleted,
	toggleTodo,
	toggleTodos,
	removeTodo,
	getActiveCount,
	getTodosCount,
	getCompletedCount,
	getFilteredTodos,
	editTodo,
};

export default TodoManager;
