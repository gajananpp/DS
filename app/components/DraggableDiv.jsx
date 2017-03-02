import React from 'react';
// import { Entity } from 'draft-js';

import Rnd from 'react-rnd';


class DraggableDiv extends React.Component {
	constructor(props) {
		super(props);
		
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('placeholders-updated');
	}

	render() {
		return (
			<Rnd
				ref={c => { this.rnd = c; }}
				initial={{
					width: 100,
					height: 100
				}}
				className="ph-border"
				minWidth={25}
				minHeight={25}
				zIndex={this.props.zIndex}
				bounds='parent'
			>
					{this.props.children}
			</Rnd>
		);
	}
}



export default DraggableDiv;