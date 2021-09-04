/* eslint-disable max-len */
import { React } from 'react';
import context from '../../core/context';

const FilterButtons = (filterName) => {
	const className
	= `filter ${ context.state.filter === filterName ? 'filter-active' : 'filter-inactive' }`;

	return <button key={ filterName } role={ filterName } className={ className } onClick={ () => context.actions.setFilter(filterName) }>
		{ filterName }
	</button>;
};

export default FilterButtons;
