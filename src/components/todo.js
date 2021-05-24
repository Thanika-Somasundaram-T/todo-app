import { React } from 'react';
import context from '../core/context';
const sharedStyle = {
	height: '1em',
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
const Todo = (todo) => {
	const { text, id, completed } = todo;
	const style = completed ? completedStyle : activeStyle ;

	return (
		<div key={ id } style={ style }>
			<span>
				<input
					type="checkBox"
					defaultChecked={ completed }
					onChange={ () => context.actions.toggleTodo(todo) }
				/>
			</span>
			<span>
				{ text }
			</span>
		</div>
	);
};

export default Todo;
