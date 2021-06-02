import { React } from 'react';

const Task = (task) => {
	const { id, text } = task;

	return (
		<div key={ id }>
			{text}
		</div>
	);
};

export default Task;
