import ClearCompletedButton from '../clearCompletedButton';
import { render } from '@testing-library/react';

describe('test for clearCompletedButton', () => {
	test('check clearCompletedButton is visible', () => {
		const component = render(ClearCompletedButton()).getByRole('clr-btn');

		expect(component).toBeInTheDocument();
		expect(component).toHaveAttribute('id', 'clr-btn');
	});
});
