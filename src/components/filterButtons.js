import { React } from 'react';
import context from '../core/context';

const trueStyle = {
	background: 'grey',
	color: 'white',
};

const defaultStyle = {
	background: '',
};
const FilterButtons = (filterName) => {
	const check
	= context.state.filter === filterName ? trueStyle : defaultStyle;

	return (
		<button
			style={ check }
			onClick={ () => context.actions.setFilter(filterName) }
		>
			{ filterName }
		</button>
	);
};

export default FilterButtons;
