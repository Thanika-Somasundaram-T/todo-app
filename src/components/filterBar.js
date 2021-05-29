import { React } from 'react';
import FilterButtons from './filterButtons';
import context from '../core/context';
import TodoManager from '../services/todoManager';

const filters = ['all', 'active', 'completed'];

const FilterBar = () => {
	const checkNoTodos = TodoManager.getTodosCount(context.state) === 0;

	return checkNoTodos
		? null
		: <div>
			{ filters.map(FilterButtons) }
		</div>;
};

export default FilterBar;
