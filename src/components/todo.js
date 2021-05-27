import { React } from 'react';
import context from '../core/context';
const sharedStyle = {
	height: '2em',
};
const activeStyle = {
	...sharedStyle,
	color: 'black',
};
const completedStyle = {
	...sharedStyle,
	color: 'grey',
};

// eslint-disable-next-line react/prop-types
// eslint-disable-next-line max-lines-per-function
const Todo = (todo) => {
	const { text, id, completed } = todo;
	const style = completed ? completedStyle : activeStyle ;

	return (
		<div key={ id } style={ style }>
			<span>
				<input
					type="checkBox"
					checked={ completed }
					onChange={ () => context.actions.toggleTodo(todo) }
				/>
			</span>
			<span>
				{ text }
			</span>
			<span>
				<button
					onClick={ () => context.actions.removeTodo(todo) }
				>x
				</button>
			</span>
		</div>
	);
};

export default Todo;
