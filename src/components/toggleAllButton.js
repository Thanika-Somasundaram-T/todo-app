/* eslint-disable indent */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const ToggleButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state) === 0;
	const checkNoTodos = TodoManager.getTodosCount(context.state) === 0;

	return checkNoTodos
		? null
		: <input
				type="checkbox"
				checked={ isChecked }
				onChange={ () => context.actions.toggleTodos(!isChecked) }
				/>;
};

export default ToggleButton;
