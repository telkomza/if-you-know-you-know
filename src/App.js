import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { exampleAction } from './actions/exampleAction';

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	exampleAction: () => dispatch(exampleAction())
});

function App(props) {
	const exampleAction = event => {
		props.exampleAction();
	};

	return (
		<div className='App'>
			<button className='exampleRedux' onClick={exampleAction}>
				ExampleRedux
			</button>
			<pre>{JSON.stringify(props)}</pre>
		</div>
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
