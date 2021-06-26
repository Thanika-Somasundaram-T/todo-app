import TaskList from './taskList';
import './default.css';
import './style.css';
import './light.css';
import './dark.css';

const TaskPane = () =>
	<div className="pane task-pane">
		<h3>TASKS</h3>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
