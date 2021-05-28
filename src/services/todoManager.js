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

const getActiveCount = ({ todos }) =>
	todos.filter((todo) => !todo.completed).length;

const getTodosCount = ({ todos }) => todos.length;

const clearCompleted = (todos) =>
	todos.filter((todo) => !todo.completed);

const getCompletedCount = ({ todos }) =>
	todos.filter((todo) => todo.completed).length;

const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};

const getFilteredTodos = ({ todos, filter }) =>
	todos.filter(filters[filter]);

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
};

export default TodoManager;
