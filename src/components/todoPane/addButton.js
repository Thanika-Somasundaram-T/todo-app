import { React } from 'react';
import context from '../../core/context';

const AddButton = () =>
	<button
		role="addButton"
		className="button"
		disabled={ context.state.input === '' }
		onClick={ context.actions.addTodo }
	>+
	</button>;

export default AddButton;
