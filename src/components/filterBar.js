import { React } from 'react';
import FilterButtons from './filterButtons';

const filters = ['all', 'active', 'completed'];

const FilterBar = () =>
	<div>
		{ filters.map(FilterButtons) }
	</div>;

export default FilterBar;
