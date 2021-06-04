import { React, useEffect } from 'react';
import './App.css';
// import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import Ticker from './services/ticker';

const App = () => {
	// useEffect(TaskManager.init, []);
	useEffect(Ticker.start, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
