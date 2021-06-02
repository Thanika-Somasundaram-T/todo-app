/* eslint-disable indent */
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';

const style = {
	borderRadius: '8px',
};

const ClearCompletedButton = () => {
	const checkCompleted = TodoManager.getCompletedCount(context.state) === 0;

	return checkCompleted
		? null
		: <button
				style={ style }
				onClick={ () => context.actions.clearCompleted() }
				>
			Clear Completed
		</button>;
};

export default ClearCompletedButton;
