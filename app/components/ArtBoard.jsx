import React from 'react';
import ReactGridLayout from 'react-grid-layout';


class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div>
				<ReactGridLayout layout={this.props.layout} cols={12} rowHeight={30} width={1800}>
					{(this.props.layout).map((obj, index) => (
						<div key={index} style={{border: '1px solid red', position: 'absolute !important', zIndex: `${index*100} !important`}}></div>
					))}
				</ReactGridLayout>
			</div>		
		);
	}
}

export default ArtBoard;