import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getTodo = (text) => ({
	id: rndString(config.idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	?	todo
	:	{
		...todo,
		completed: !data.completed,
	}
));

const TodoManager = {
	addTodo,
	toggleTodo,
};

export default TodoManager;
