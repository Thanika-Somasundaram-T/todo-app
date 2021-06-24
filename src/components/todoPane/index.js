import InputBox from './inputBox';
import context from '../../core/context';
import TodoList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearCompletedButton from './clearCompletedButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';
import { peek } from '@laufire/utils/debug';
import './default.css';
import ThemeSelector from '../themeSelector';


const todoPane = () => {
	peek("hi");
	return (
		<div className="todoPane">
		<div>
			<h3> TODO </h3>
		</div>
		<div>{ ToggleAllButton() }
			{ InputBox() }
			{ ActionButton() }</div>
		<div>{ TodoList() }</div>
		<div>{ ClearCompletedButton() }</div>
		<div>{ FilterBar() }</div>
		<div>Refresh ID: { context.state.refreshID }</div>
	</div>
	);
};

export default todoPane;
