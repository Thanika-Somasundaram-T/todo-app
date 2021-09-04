import ToggleButton from "../toggleAllButton";
import { render, fireEvent } from '@testing-library/react';

describe('test toggleButton', () => {
	test('toggleButton is visible when there is one or more todos', () => {
		const component = render(ToggleButton()).getByRole('toggleButton');

		expect(component).toBeInTheDocument();
		expect(component).
	});
});
