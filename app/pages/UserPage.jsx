import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
import { grey500 } from 'material-ui/styles/colors';
import PresentationsList from '../components/PresentationsList';
import DisplaysList from '../components/DisplaysList';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';





const styles = {
	headline: {
		display: 'inline',
		fontSize: 24,
    	marginTop: 16,
    	marginBottom: 14,
    	fontWeight: 400,
    	color: grey500
	},
	headlineIcon: {
		fontSize: 24,
    	marginTop: 16,
    	marginBottom: 12,
    	fontWeight: 400,
    	fontWeight: 400,
    	marginRight: 8,
    	marginLeft: 8,
    	color: grey500
	},
	headlineButton: {
		float: 'right', 
		marginTop: 16,
		marginRight: 10,
		marginBottom: 0,
		marginLeft: 10
	}
};

class UserPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex : 0,
			dialogOpen: false,
			presentationSelectFields: {
				value_one: 0
			}
		};
	}

	handleChange = (value) => {
    	this.setState({
      		slideIndex: value,
    	});
  	};

  	handleClose = () => {
  		this.setState({
  			dialogOpen: false
  		});
  	};

  	addDisplay() {
  		this.setState({
  			dialogOpen: true
  		});
  	}

  	selectFieldPresentationArray() {
  		return (this.props.presentations).map((obj, index) => (
  			<MenuItem value={index} key={index} primaryText={`${obj.presentationName}`} />
  		));
  	}

	render() {
		return (
			<div>
				<Tabs
					onChange={this.handleChange}
					value={this.state.slideIndex}
					inkBarStyle={{backgroundColor: 'black'}}
				>
					<Tab label="Presentations" value={0} />
					<Tab label="Displays" value={1} />
				</Tabs>
				<SwipeableViews
					index={this.state.slideIndex}
					onChangeIndex={this.handleChange}
				>
					<div>
						<FontIcon 
							className="fa fa-file"
							style={styles.headlineIcon}
						/>
						<h2 style={styles.headline}>Presentations</h2>
						<RaisedButton 
							label="Add"
							labelPosition="after"
							style={styles.headlineButton}
							icon={<FontIcon className="fa fa-plus" style={{fontSize: 15}} />}
						/>
						<PresentationsList presentations={this.props.presentations} />
					</div>
					<div style={styles.slide}>
						<FontIcon 
							className="fa fa-television"
							style={styles.headlineIcon}
						/>
						<h2 style={styles.headline}>Displays</h2>
						<RaisedButton 
							label="Add"
							onClick={() => this.addDisplay()} 
							labelPosition="after"
							style={styles.headlineButton}
							icon={<FontIcon className="fa fa-plus" style={{fontSize: 15}} />}
						/>
						<DisplaysList displays={this.props.displays} />						
					</div>
				</SwipeableViews>
				
				<Dialog
					title="Add Display"
					modal={false}
					open={this.state.dialogOpen}
					onRequestClose={this.handleClose}
				>
					<TextField 
						floatingLabelText="Display Name"
					/> <br /><br />
					<p>Select presentations to be displayed on this display: </p>
					<div>
						<SelectField
							maxHeight={500}
							fullWidth={true}
						>
							{this.selectFieldPresentationArray()}
						</SelectField><br />
						<span>
							<DatePicker hintText="Schedule from date" mode="landscape" style={{display: 'inline-block', marginRight: 100}} />
							<TimePicker hintText="Schedule from time" style={{display: 'inline-block'}} />
						</span>
					</div>
					<RaisedButton 
						label="Add More"
						labelPosition="after"
						icon={<FontIcon className="fa fa-plus" style={{fontSize: 15}} />}
					/>
				</Dialog>

			</div>
		);
	}
}

export default UserPage;