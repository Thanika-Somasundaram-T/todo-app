import context from '../core/context';
import EditButton from './editButton';
import AddButton from './addButton';

const ActionButton = () => (context.state.editing
	? EditButton()
	: AddButton()
);

export default ActionButton;
