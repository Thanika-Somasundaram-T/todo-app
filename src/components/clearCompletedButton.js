import { React } from 'react';
import context from '../core/context';

const ClearCompletedButton = () =>
	<button onClick={ () => context.actions.clearCompleted() }>Clear completed
	</button>;

export default ClearCompletedButton;
