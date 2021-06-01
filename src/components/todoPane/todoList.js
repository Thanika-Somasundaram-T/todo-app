import { React } from 'react';
import Todo from './todo';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const TodoList = () => {
	const filteredTodos = TodoManager.getFilteredTodos(context.state);

	return <div>
		{ filteredTodos.map(Todo) }
	</div>;
};

export default TodoList;
