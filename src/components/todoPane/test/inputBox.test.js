import InputBox from '../inputBox';
import { render, fireEvent } from '@testing-library/react';
import context from '../../../core/context';

jest.mock('../../../core/context', () => ({
	state: {
		input: '',
		editing: '',
	},
	actions: {
		updateInput: jest.fn(),
		editTodo: jest.fn(),
		addTodo: jest.fn(),
	},
}));

describe('test for inputBox', () => {
	const { actions } = context;

	test('inputBox is visible ?', () => {
		const component = render(InputBox()).getByRole('inputBox');

		expect(component).toBeInTheDocument();
	});

	test('event checking', () => {
		jest.spyOn(actions, 'updateInput');
		const component = render(InputBox()).getByRole('inputBox');

		fireEvent.change(component);
		expect(actions.updateInput).toHaveBeenCalled();
	});
});
