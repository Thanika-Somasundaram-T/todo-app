import InputBox from './inputBox';
import context from '../../core/context';
import TodoList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearCompletedButton from './clearCompletedButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';
import { peek } from '@laufire/utils/debug';

const style = {
	position: 'absolute',
	height: '100%',
	width: '50%',
	background: 'BEIGE',
	top: 0,
	left: 0,

};

const todoPane = () => {
	peek("hi");
	return (
		<div style={ style }>
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
