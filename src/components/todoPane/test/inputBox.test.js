import InputBox from '../inputBox';
import { render, fireEvent } from '@testing-library/react';

describe('test for inputBox', () => {
	test('check inputBox is visible', () => {
		const component = render(InputBox()).getByRole('inputBox');

		expect(component).toBeInTheDocument();
	});
});
