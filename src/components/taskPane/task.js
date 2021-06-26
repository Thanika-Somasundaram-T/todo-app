import { React } from 'react';
import context from '../../core/context';

const RemoveButton = (task) =>
	<button
		className="x"
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
		<div key={ id } className="task">
			<span>
				{ AddButton(task) }
			</span>
			<span>
				{text}
			</span>
			<span>
				{ RemoveButton(task) }
			</span>
		</div>
	);
};

export default Task;
