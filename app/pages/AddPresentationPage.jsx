import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import ArtBoard from '../components/ArtBoard';

const screenResolutions = [
	[1024, 768],
	[1280, 1024],
	[1600, 1200],
	[1280, 720],
	[1280, 768],
	[1360, 768],
	[1366, 768],
	[1440, 900],
	[1680, 1050],
	[1920, 1080],
	[3840, 2160]
];


class AddPresentationPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: true,
			presentationName: '',
			screenResolution: {
				width: 1024,
				height: 768,
				currentIndex: 0
			}
		};
	}


	handleClose = () => {
		this.setState({
			dialogOpen: false
		});
	}

	handleInputName(event,text) {
		this.setState({
			presentationName: text
		});
	}

	handleInputResolution(event, key, value) {
		this.setState({
			screenResolution: {
				width: screenResolutions[value][0],
				height: screenResolutions[value][1],
				currentIndex: value
			}
		});
	}

	render() {
		return (
			<div>
				<div style={{display: 'flex', flexDirection: 'row', height: "85vh"}}>
					<div
						style={{width: "20%", height: "85vh"}}
					>
						<div style={{textAlign: 'center', fontSize: 20, color:'white', backgroundColor: 'grey', height: 50}}>
							<span style={{lineHeight: 2.5}}>{this.state.presentationName}</span>
						</div>
						<List style={{padding: 0}}>
							<ListItem primaryText="Add Widget" onClick={() => this.addPlaceholder()} leftIcon={<FontIcon className="fa fa-plus" />} />
						</List>
					</div>
					<div
						style={{width: "80%", height: "84.5vh", border: '1px solid black', outline: '5px solid grey', overflow: 'auto'}}
					>
						<ArtBoard width={this.state.screenResolution.width} height={this.state.screenResolution.height} />
					</div>
				</div>
				




				<Dialog
					title="Presentation Settings"
					modal={true}
					actions={<RaisedButton label="Ok" primary={true} onClick={this.handleClose} />}
					open={this.state.dialogOpen}
				>
					<div>
						<div id="presenation-name" style={{}}>
							<TextField name="presentationName" hintText="Enter Presentation Name" onChange={(event, text) => this.handleInputName(event, text)} />
						</div>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
							<span style={{marginRight: 5}}>Display Size: </span> 
							<DropDownMenu
								name="screenResolution"
								value={this.state.screenResolution.currentIndex}
								style={{marginTop: -10}}
								onChange={(event, key, value) => this.handleInputResolution(event, key, value)}
							>	
								{screenResolutions.map((resolution, index) => (
									<MenuItem key={index} value={index} primaryText={`${resolution[0]}x${resolution[1]}`} />
								))}
							</DropDownMenu>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default AddPresentationPage;