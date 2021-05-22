import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import InputBox from './components/inputBox';
import AddButton from './components/addButton';
import TodoList from './components/todoList';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>{ InputBox() }{ AddButton() }</div>
			<div>{ TodoList() }</div>
		</div>
	);
};

export default App;
