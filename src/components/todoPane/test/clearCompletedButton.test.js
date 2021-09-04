/* eslint-disable max-lines-per-function */
import ClearCompletedButton from '../clearCompletedButton';
import { render, fireEvent } from '@testing-library/react';
import context from '../../../core/context';
import TodoManager from '../../../services/todoManager';

jest.mock('../../../core/context', () => ({
	state: { todos: [
		{
			id: '1',
			text: 'one',
			completed: true,
		},
	] },
	actions: { clearCompleted: jest.fn() },
}));

describe('test for clearCompletedButton', () => {
	const { actions } = context;

	test('clearCompletedButton is visible when one or more todos are completed '
		, () => {
			jest.spyOn(TodoManager, 'getCompletedCount');
			const component = render(ClearCompletedButton())
				.getByRole('clr-btn');

			expect(component).toBeInTheDocument();
			expect(TodoManager.getCompletedCount).toHaveBeenCalled();
		});

	test('clearCompleted is not visible when all todos are not completed'
		, () => {
			jest.spyOn(TodoManager, 'getCompletedCount').mockReturnValue(true);
			const component = ClearCompletedButton();

			expect(component).not.toBeInTheDocument();
			expect(component).toEqual(null);
		});

	test('event checking', () => {
		jest.spyOn(actions, 'clearCompleted');
		const component = render(ClearCompletedButton()).getByRole('clr-btn');

		fireEvent.click(component);

		expect(actions.clearCompleted).toHaveBeenCalled();
	});
});
