import { React } from 'react';
import context from '../../core/context';
import Task from './task';

const TaskList = () => {
	const { tasks } = context.state;

	return (
		<div>
			{tasks.map(Task)}
		</div>
	);
};

export default TaskList;
