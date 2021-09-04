import { React } from 'react';
import FilterButtons from './filterButtons';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const filters = ['all', 'active', 'completed'];

const FilterBar = () => {
	const checkNoTodos = TodoManager.getTodosCount(context.state.todos);

	return checkNoTodos
		? null
		: <div role="filterBar">
			{ filters.map(FilterButtons) }
		</div>;
};

export default FilterBar;
