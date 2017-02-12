import React from 'react';
// import { Entity } from 'draft-js';

import Rnd from 'react-rnd';


class DraggableDiv extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<Rnd
				ref={c => { this.rnd = c; }}
				initial={{
					width: 100,
					height: 100
				}}
				style={{
					border: '3px solid black'
				}}
				minWidth={25}
				minHeight={25}
				bounds='parent'
			>
					{this.props.children}
			</Rnd>
		);
	}
}



export default DraggableDiv;