/* eslint-disable max-lines-per-function */
import ToggleButton from '../toggleAllButton';
import { render, fireEvent } from '@testing-library/react';
import TodoManager from '../../../services/todoManager';
import context from '../../../core/context';

jest.mock('../../../core/context', () => ({
	state: { todos: [] },
	actions: { toggleTodos: jest.fn() },
}));

describe('testing toggleButton', () => {
	test('toggleButton is visible when there is one or more todos', () => {
		jest.spyOn(TodoManager, 'getTodosCount').mockReturnValueOnce(false);

		const component = render(ToggleButton()).getByRole('toggleAllButton');

		expect(component).toBeInTheDocument();
	});

	test('toggleButton is not visible when there is no todos', () => {
		jest.spyOn(TodoManager, 'getTodosCount').mockReturnValueOnce(true);

		const component = ToggleButton();

		expect(component).not.toBeInTheDocument();
		expect(component).toEqual(null);
	});

	test('event checking', () => {
		const { actions } = context;

		jest.spyOn(TodoManager, 'getActiveCount');
		jest.spyOn(TodoManager, 'getTodosCount').mockReturnValueOnce(false);

		const component = render(ToggleButton()).getByRole('toggleAllButton');

		fireEvent.click(component);
		expect(TodoManager.getActiveCount).toHaveBeenCalled();
		expect(TodoManager.getTodosCount).toHaveBeenCalled();
		expect(actions.toggleTodos).toHaveBeenCalled();
	});
});
