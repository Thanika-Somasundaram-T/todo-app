import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import Ticker from './services/ticker';
import context from './core/context';
import ThemeSelector from './components/themeSelector';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(Ticker.start, []);

	return (
		<div className={ `App ${ context.state.theme }` }>
			{ TodoPane() }
			{ TaskPane() }
			{ ThemeSelector() }
		</div>
	);
};

export default App;
