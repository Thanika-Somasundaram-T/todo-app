const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const actions = {
	increaseCount,
};

export default actions;
