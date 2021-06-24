import TaskManager from '../services/taskManager';
import TodoManager from '../services/todoManager';

const updateInput = (dummy, input) => ({
	input,
});
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

const setEdit = (dummy, todo) => ({
	editing: todo,
	input: todo.text,
});

const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const setTask = (dummy, tasks) => ({
	tasks,
});

const removeTask = ({ state }, task) => ({
	tasks: TaskManager.removeTask(state.tasks, task),
});

const addTaskToTodo = ({ state }, task) => ({
	todos: TodoManager.addTodo(state.todos, task.text),
});

const addTask = ({ state }, taskName) => ({
	tasks: TaskManager.addTask(state.tasks, taskName),
});

const updateTheme = (dummy, theme) => ({
	theme,
});

const actions = {
	updateInput,
	addTodo,
	clearCompleted,
	toggleTodo,
	toggleTodos,
	removeTodo,
	setFilter,
	editTodo,
	setEdit,
	setTask,
	removeTask,
	addTaskToTodo,
	addTask,
	updateTheme,
};

export default actions;
