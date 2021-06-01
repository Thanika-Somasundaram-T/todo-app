/* eslint-disable max-len */
import { React } from 'react';
import context from '../../core/context';

const sharedStyle = {
	borderRadius: '8px',
	margin: '5px',
	width: '100px',
};

const trueStyle = {
	...sharedStyle,
	background: 'grey',
	color: 'white',
};

const defaultStyle = {
	...sharedStyle,
	background: '',
};

const FilterButtons = (filterName) => {
	const checkFilter
	= context.state.filter === filterName ? trueStyle : defaultStyle;

	return <button key={ filterName } style={ checkFilter } onClick={ () => context.actions.setFilter(filterName) }>
		{ filterName }
	</button>;
};

export default FilterButtons;
