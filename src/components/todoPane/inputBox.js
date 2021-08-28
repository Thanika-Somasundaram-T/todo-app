import { React } from 'react';
import context from '../../core/context';

const EditActionKey = () => (
	context.state.editing
		? 'editTodo'
		: 'addTodo'
);

const actionKeys = {
	Enter: () => context.actions[EditActionKey()](),
	Escape: () => context.actions.updateInput(''),
};

const InputBox = () =>
	<input
		role="inputBox"
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default InputBox;
