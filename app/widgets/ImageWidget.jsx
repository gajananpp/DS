import React from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CheckBox from 'material-ui/CheckBox';

class ImageWidget extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: '',
			
			grayImage: false,
			sepiaImage: false,

			dialogOpen: true,
		};
	}



	handleUrlChange = (event, text) => {
		this.setState({
			imgSrc : text,
		});
	}

	handleGrayFilter = (event, isInputChecked) => {
		if (isInputChecked) {
			this.imgEl.style.filter = "grayscale(100%)";
		} else {
			this.imgEl.style.filter = "";
		}
		this.setState({
			grayImage: isInputChecked
		});
		console.log(isInputChecked);
	}

	handleSepiaFilter = (event, isInputChecked) => {
		if (isInputChecked) {
			this.imgEl.style.filter = "sepia(100%)";
		} else {
			this.imgEl.style.filter = "";
		}
		this.setState({
			sepiaImage: isInputChecked
		});
		console.log(isInputChecked);
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

	componentDidMount() {
	}


	render() {
		return (
			<div style={{width: '100%', height: '100%'}} onDoubleClick={ this.handleOpen } >
				<div style={{width: '100%', height: '100%'}}>
					<img ref={imgEl => this.imgEl = imgEl} className="image-widget" style={{width: '100%', height: '100%'}} src={this.state.imgSrc} alt={this.state.imgSrc} />
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
							<TextField hintText="Image URL" defaultValue={this.state.imgSrc} onChange={ this.handleUrlChange } />
						</label>
						<br />
						<div>
							<CheckBox
								label="Black And White Filter"
								checked={ this.state.grayImage } 
								onCheck={ this.handleGrayFilter }
							/>
							<CheckBox
								label="Sepia Filter"
								checked={ this.state.sepiaImage } 
								onCheck={ this.handleSepiaFilter }
							/>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default ImageWidget;