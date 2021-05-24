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

const actions = {
	updateInput,
	addTodo,
	toggleTodo,
};

export default actions;
