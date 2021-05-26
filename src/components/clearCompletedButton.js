import { React } from 'react';
import context from '../core/context';

const ClearCompletedButton = () =>
	<button
		onClick={ () => context.actions.clearCompleted() }
	>
		Clear Completed
	</button>;

export default ClearCompletedButton;
