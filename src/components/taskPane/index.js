import TaskList from './taskList';

const style = {
	position: 'absolute',
	height: '100%',
	width: '50%',
	background: 'turquoise',
	top: 0,
	right: 0,
};

const TaskPane = () =>
	<div style={ style }>
		<h3>Tasks</h3>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
