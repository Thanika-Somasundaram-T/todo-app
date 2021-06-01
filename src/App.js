import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import InputBox from './components/inputBox';
import TodoList from './components/todoList';
import context from './core/context';
import ToggleAllButton from './components/toggleAllButton';
import ClearCompletedButton from './components/clearCompletedButton';
import FilterBar from './components/filterBar';
import ActionButton from './components/actionButton';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>{ ToggleAllButton() }
				{ InputBox() }
				{ ActionButton() }</div>
			<div>{ TodoList() }</div>
			<div>{ ClearCompletedButton() }</div>
			<div>{ FilterBar() }</div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
