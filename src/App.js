import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import TodoPane from './components/todoPane';
const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			{ TodoPane() }
		</div>
	);
};

export default App;
