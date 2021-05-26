import { React } from 'react';
import context from '../core/context';

const getActiveCount = ({ todos }) =>
	todos.filter((todo) => !todo.completed).length;

const ToggleButton = () => {
	const isChecked = getActiveCount(context.state) === 0;

	return (
		<input
			type="checkbox"
			checked={ isChecked }
			onChange={ () => context.actions.toggleTodos(!isChecked) }
		/>
	);
};

export default ToggleButton;
