import AddButton from '../addButton';
import render from '@testing-library/react';
// import context from '../../../core/context';
jest.mock('../core/context', () => ({
	state: { input: Symbol('input') },
}));

describe('addButton', () => {
	test('check addButton is visible', () => {
		const component = render(AddButton()).getByRole('addButton');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('button');
	});
});
