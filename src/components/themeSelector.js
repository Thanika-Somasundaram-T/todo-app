import { React } from 'react';
import context from '../core/context';
import config from '../core/config';

const ThemeSelector = () =>
	<select
		name="ThemeSelector"
		value={ context.state.theme }
		onChange={ (evt) => context.actions.updateTheme(evt.target.value) }
	>
		{ config.themes.map((theme) =>
			<option
				key={ theme }
				value={ theme }
			>
				{ theme }
			</option>)}
	</select>;

export default ThemeSelector;
