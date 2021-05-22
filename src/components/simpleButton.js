import { React } from 'react';
import config from '../core/config';
import context from '../core/context';

const SimpleButton = () =>
	<button
		onClick={ () => context.actions.increaseCount(config.increment) }
	>
		Click Me!
	</button>;

export default SimpleButton;
