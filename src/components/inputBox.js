import { React } from 'react';
import context from '../core/context';

const actionKeys = {
	Enter: () => context.actions.addTodo(),
	Escape: () => context.actions.updateInput(''),
};

const InputBox = () =>
	<input
		value={ context.state.input }
		onChange={ (evt) => context.actions.updateInput(evt.target.value) }
		onKeyUp={ (evt) => actionKeys[evt.code] && actionKeys[evt.code]() }
	/>;

export default InputBox;
