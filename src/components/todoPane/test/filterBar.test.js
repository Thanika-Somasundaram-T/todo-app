/* eslint-disable max-lines-per-function */
import React from 'react';
import FilterBar from '../filterBar';
import TodoManager from '../../../services/todoManager';
import { render } from '@testing-library/react';
import context from '../../../core/context';
import * as FilterButtons from '../filterButtons';

jest.mock('../../../core/context', () => ({
	state: { todos: [] },
}));

jest.mock('../filterButtons', () =>
	jest.fn((filter) =>
		<button role={ filter }>
			{ filter }
		</button>));

// jest.mock('../filterButtons', () => jest.fn().mockImplementation((filter) =>
// 	<button role={ filter }>
// 		{ filter }
// 	</button>));

describe('test filterBar', () => {
	const filters = ['all', 'active', 'completed'];

	test('filterBar is visible when there are one or more todos available'
		, () => {
			jest.spyOn(TodoManager, 'getTodosCount').mockReturnValue(false);
			const rendered = render(FilterBar());
			const component = rendered.getByRole('filterBar');

			expect(component).toBeInTheDocument();
			expect(TodoManager.getTodosCount)
				.toHaveBeenCalledWith(context.state.todos);

			filters.map((filter) => {
				jest.spyOn(FilterButtons, 'default')
					.mockReturnValue(<div role={ filter }/>);

				const button = rendered.getByRole(filter);

				expect(button).not.toBeInTheDocument();
				expect(FilterButtons.default)
					.toHaveBeenCalledWith(filter);
			});
		});

	test('filterBar is not visible when there is no todos', () => {
		jest.spyOn(TodoManager, 'getTodosCount').mockReturnValue(true);
		const component = FilterBar();

		expect(component).toEqual(null);
		expect(component).not.toBeInTheDocument();
		expect(TodoManager.getTodosCount)
			.toHaveBeenCalledWith(context.state.todos);
	});
});
