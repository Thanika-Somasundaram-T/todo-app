import { React } from 'react';
import context from '../../core/context';

const style = {
	margin: '5px',
	height: '2em',
};

const RemoveButton = (task) =>
	<button
		onClick={ () => context.actions.removeTask(task) }
	>
		x
	</button>;

const AddButton = (task) =>
	<button
		onClick={
			() => {
				context.actions.addTaskToTodo(task);
				context.actions.removeTask(task);
			}
		}
	>
		+
	</button>;

const Task = (task) => {
	const { id, text } = task;

	return (
		<div key={ id }>
			<span>
				{ AddButton(task) }
			</span>
			<span>
				{text}
			</span>
			<span style={ style }>
				{ RemoveButton(task) }
			</span>
		</div>
	);
};

export default Task;
