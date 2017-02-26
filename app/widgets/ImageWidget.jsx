import React from 'react';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider';

class ImageWidget extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: '',
			
			appliedFilter: '',
			appliedFilterValue: 100,

			dialogOpen: true,
		};
	}



	handleUrlChange = (event, text) => {
		this.setState({
			imgSrc : text,
		});
	}


	handleFilter = (event, value) => {
		console.log(value);
		this.imgEl.style.filter = value;
		this.setState({
			appliedFilter: value
		});
	}

	handleFilterValue = (event, newValue) => {
		this.setState({
			appliedFilterValue: newValue
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
						<fieldset style={{paddingRight: 30, paddingLeft: 30, paddingTop: 20}}>
							<legend>Filter Control</legend>
							<RadioButtonGroup name="filter" onChange={ this.handleFilter } valueSelected={this.state.appliedFilter}>
								<RadioButton 
									value={`grayscale(${this.state.appliedFilterValue}%)`}
									label="Black And White Filter"
								/>
								<RadioButton 
									value={`sepia(${this.state.appliedFilterValue}%)`}
									label="Sepia Filter"
								/>
								<RadioButton 
									value={`brightness(${this.state.appliedFilterValue*2}%)`}
									label="Brightness"
								/>
								<RadioButton 
									value={`invert(${this.state.appliedFilterValue}%)`}
									label="Invert"
								/>
								<RadioButton 
									value={`opacity(${this.state.appliedFilterValue}%)`}
									label="Opacity"
								/>
								<RadioButton 
									value={`saturate(${this.state.appliedFilterValue*2}%)`}
									label="Saturate"
								/>
								<RadioButton 
									value={`contrast(${this.state.appliedFilterValue*2}%)`}
									label="Contrast"
								/>
								<RadioButton 
									value={`blur(${this.state.appliedFilterValue/10}px)`}
									label="Blur"
								/>
								<RadioButton 
									value={`hue-rotate(${this.state.appliedFilterValue*3.6}deg)`}
									label="Hue Rotate"
								/>
								<RadioButton 
									value={``}
									label="None"
								/>
							</RadioButtonGroup>
							<br />
							<span>Filter Value: {this.state.appliedFilterValue}</span>
							<Slider
								min={0}
								max={100}
								onChange={ this.handleFilterValue }
								value={this.state.appliedFilterValue}
								step={1} 
								style={{marginTop: -15}}
							/>
							</fieldset>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default ImageWidget;