import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getTodo = (text) => ({
	id: rndString(config.idLength),
	text: text,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const TodoManager = {
	addTodo,
};

export default TodoManager;
