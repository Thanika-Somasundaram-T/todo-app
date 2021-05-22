import { React } from 'react';
import Todo from './todo';
import context from '../core/context';

const TodoList = () =>
	<div>
		{ context.state.todos.map(Todo) }
	</div>;

export default TodoList;
