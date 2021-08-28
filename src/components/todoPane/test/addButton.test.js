import AddButton from '../addButton';
import { render, fireEvent } from '@testing-library/react';
import context from '../../../core/context';

jest.mock('../../../core/context', () => ({
	state: { input: Symbol('input') },
	actions: { addTodo: jest.fn() },
}));

describe('addButton', () => {
	const { actions } = context;

	test('check addButton is visible', () => {
		const component = render(AddButton()).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('button');
	});

	test('event checking', () => {
		jest.spyOn(actions, 'addTodo');

		const component = render(AddButton()).getByRole('addButton');

		fireEvent.click(component);

		expect(actions.addTodo).toHaveBeenCalled();
	});
});
