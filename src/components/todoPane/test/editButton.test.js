import EditButton from '../editButton';
import { render, fireEvent } from '@testing-library/react';
import context from '../../../core/context';

jest.mock('../../../core/context', () => ({
	state: { input: 'hi' },
	actions: { editTodo: jest.fn() },
}));

describe('Test EditButton', () => {
	const { actions } = context;

	test('EditButton is visible ?', () => {
		const component = render(EditButton()).getByRole('editButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('button-OK');
	});

	test('event checking', () => {
		const component = render(EditButton()).getByRole('editButton');

		fireEvent.click(component);

		expect(actions.editTodo).toHaveBeenCalled();
	});
});
