import React from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ImageWidget extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: '',
			dialogOpen: true,
		};
	}


	handleChange = (event, text) => {
		this.setState({
			imgSrc : text,
		});
	}

	handleOpen = () => {
		this.setState({
			dialogOpen: true,
		});
	}

	handleClose = () => {
		this.setState({
			dialogOpen: false,
		});
	}


	render() {
		return (
			<div style={{width: '100%', height: '100%'}} onDoubleClick={ this.handleOpen } >
				<div style={{width: '100%', height: '100%'}}>
					<img style={{width: '100%', height: '100%'}} src={this.state.imgSrc} alt={this.state.imgSrc} />
				</div>

				<Dialog
					title="Image Widget Settings"
					open={this.state.dialogOpen}
					modal={true}
					actions={<RaisedButton label="Ok" primary={true} onClick={ this.handleClose } />}
				>
					<div>
						<label>
							<span style={{marginRight: 20}}>Image Link :</span>
							<TextField hintText="Image URL" defaultValue={this.state.imgSrc} onChange={ this.handleChange } />
						</label>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default ImageWidget;