import TodoManager from '../services/todoManager';
const updateInput = (dummy, evt) => {
	// eslint-disable-next-line no-console
	console.log(evt.target.value);

	return {
		input: evt.target.value,
	};
};
const addTodo = ({ state, seed }) => ({
	input: seed.input,
	todos: TodoManager.addTodo(state.todos, state.input),
});
const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const toggleTodos = ({ state }, isChecked) => ({
	todos: TodoManager.toggleTodos(state.todos, isChecked),
});

const clearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});

const setFilter = (dummy, filterName) => ({
	filter: filterName,
});

const actions = {
	updateInput,
	addTodo,
	clearCompleted,
	toggleTodo,
	toggleTodos,
	removeTodo,
	setFilter,
};

export default actions;
