import { React } from 'react';

// eslint-disable-next-line react/prop-types
const Todo = ({ text, id }) =>
	<div key={ id }>{ text }</div>;

export default Todo;
