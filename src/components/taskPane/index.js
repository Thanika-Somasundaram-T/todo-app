import TaskList from './taskList';
import './Default.css';

const TaskPane = () =>
	<div className="task-pane">
		<h3>TASKS</h3>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
