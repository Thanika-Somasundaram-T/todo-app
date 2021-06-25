import { React } from 'react';
import context from '../../core/context';

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line max-lines-per-function
const Todo = (todo) => {
	const { text, id, completed } = todo;
	const className = `todo ${ completed ? 'todo-completed' : 'todo-active' }` ;

	return (
		<div key={ id } className={ className }>
			<span>
				<input
					type="checkBox"
					checked={ completed }
					onChange={ () => context.actions.toggleTodo(todo) }
				/>
			</span>
			<span
				onClick={ () => context.actions.setEdit(todo) }
			>
				{ text }
			</span>
			<span>
				<button
					className="button-x"
					onClick={ () => context.actions.removeTodo(todo) }
				>x
				</button>
			</span>
		</div>
	);
};

export default Todo;
