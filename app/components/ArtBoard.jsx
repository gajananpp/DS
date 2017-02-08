import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';


class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<Scrollbars>
				<div style={{width: this.props.width, height: this.props.height}}>
				</div>
			</Scrollbars>
		);
	}
}

export default ArtBoard;