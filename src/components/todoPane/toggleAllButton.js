/* eslint-disable indent */
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ToggleButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos);
	const checkNoTodos = TodoManager.getTodosCount(context.state.todos);

	return checkNoTodos
		? null
		: <input
				role="toggleAllButton"
				type="checkbox"
				checked={ isChecked }
				onChange={ () => context.actions.toggleTodos(!isChecked) }
				/>;
};

export default ToggleButton;
