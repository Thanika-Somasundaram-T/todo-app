import { React } from 'react';
import context from '../core/context';

const InputBox = () =>
	<input
		value={ context.state.input }
		onChange={ context.actions.updateInput }
	/>;

export default InputBox;
