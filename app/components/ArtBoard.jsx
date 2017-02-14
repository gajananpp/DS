import React from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { Scrollbars } from 'react-custom-scrollbars';
import { stateToHTML } from 'draft-js-export-html';
import DraggableDiv from './DraggableDiv';



class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
		};
	}



	componentDidMount() {
		// console.log(document.getElementById('presentation-artboard').innerHTML.toString());
	}

	render() {
				// console.log(document.getElementById('presentation-artboard').innerHTML.toString());

		return (
			<Scrollbars>
				<div style={{width: this.props.width, height: this.props.height, background: this.props.backgroundColor + ` url(${this.props.backgroundImgURL})` }}>
					{ this.props.widgetsUsed.map((obj, index) => (
						<DraggableDiv key={index}>{obj.element}</DraggableDiv>
					)) }
				</div>

			</Scrollbars>
		);
	}
}

export default ArtBoard;