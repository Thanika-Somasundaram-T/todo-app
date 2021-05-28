/* eslint-disable max-len */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const trueStyle = {
	background: 'grey',
	color: 'white',
};

const defaultStyle = {
	background: '',
};
const FilterButtons = (filterName) => {
	const checkFilter
	= context.state.filter === filterName ? trueStyle : defaultStyle;
	const checkNoTodos = TodoManager.getTodosCount(context.state) === 0;

	return checkNoTodos
		? null
		: <button style={ checkFilter } onClick={ () => context.actions.setFilter(filterName) }>
			{ filterName }
		</button>;
};

export default FilterButtons;
