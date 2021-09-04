import FilterButtons from '../filterButtons';
import { render, fireEvent } from '@testing-library/react';
import context from '../../../core/context';

describe('testing filterButtons', () => {
	const filterButton = ['all', 'active', 'completed'];

	test('filterButton are rendered', () => {
		const component = render(filterButton.map(FilterButtons()))
			.getByRole('filterButtons');

		expect()
	});
});
