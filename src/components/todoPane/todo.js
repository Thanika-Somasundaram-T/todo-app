import { React } from 'react';
import context from '../../core/context';
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

const widthStyle = {
	margin: '10px',
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
			<span onClick={ () => context.actions.setEdit(todo) }>
				{ text }
			</span>
			<span>
				<button
					style={ widthStyle }
					onClick={ () => context.actions.removeTodo(todo) }
				>x
				</button>
			</span>
		</div>
	);
};

export default Todo;
