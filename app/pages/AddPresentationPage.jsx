import React from 'react';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import ArtBoard from '../components/ArtBoard';

let phIndex = 0;
let phArray = [];

class AddPresentationPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			layout: [],
			dialogOpen: true
		};
	}

	addPlaceholder() {
		phIndex++;
		phArray.push({i: phIndex, x:0, y:0, w:2, h:2});
		this.setState({
			layout: phArray
		});
	}

	handleClose = () => {
		this.setState({
			dialogOpen: false
		});
	}

	render() {
		return (
			<div>
				<div style={{display: 'flex', flexDirection: 'row', height: 650}}>
					<div
						style={{width: "20%"}}
					>
						<List>
							<ListItem primaryText="Add Placeholder" onClick={() => this.addPlaceholder()} leftIcon={<FontIcon className="fa fa-plus" />} />
						</List>
					</div>
					<div
						style={{width: "80%", border: '1px solid black', overflow: 'auto'}}
					>
						<ArtBoard layout={this.state.layout} />
					</div>
				</div>
				




				<Dialog
					title="Presentation Settings"
					modal={true}
					actions={<RaisedButton label="Ok" primary={true} onClick={this.handleClose} />}
					open={this.state.dialogOpen}
				>
					<div>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
							<span>Display Size: </span> 
							<DropDownMenu>
								<MenuItem value={1} primaryText=""></MenuItem>
							</DropDownMenu>
						</div>
					</div>
				</Dialog>
			</div>
		);
	}
}

export default AddPresentationPage;