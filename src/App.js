/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import Ticker from './services/ticker';
import context from './core/context';
import ThemeSelector from './components/themeSelector';
import { Box } from '@material-ui/core';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(Ticker.start, []);

	return (
		<Box display="flex" height="100vh" flexDirection="row" overflow="auto" className="App">
			<Box width="50%" className={ `${ context.state.theme }-todo-pane` }>
				{ TodoPane() }
			</Box>
			<Box width="50%" className={ `${ context.state.theme }-task-pane` }>
				{ TaskPane() }
			</Box>
			<Box>
				{ ThemeSelector() }
			</Box>
		</Box>
	);
};

export default App;
