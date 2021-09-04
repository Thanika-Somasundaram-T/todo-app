/* eslint-disable indent */
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const ClearCompletedButton = () => {
	const checkCompleted
		= TodoManager.getCompletedCount(context.state.todos);

	return checkCompleted
		? null
		: <button
				role="clr-btn"
				id="clr-btn"
				onClick={ () => context.actions.clearCompleted() }
				>
			Clear Completed
		</button>;
};

export default ClearCompletedButton;
