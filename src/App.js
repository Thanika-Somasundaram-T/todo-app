import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';

const App = () => {
	useEffect(TaskManager.init, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
