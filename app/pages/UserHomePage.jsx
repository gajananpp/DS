import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
import { grey500 } from 'material-ui/styles/colors';
import PresentationsList from '../components/PresentationsList';
import DisplaysList from '../components/DisplaysList';


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

class UserHomePage extends React.Component {
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
							label="Add Presentation"
							labelPosition="after"
							href="/user/add-presentation"
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
							label="Add Display"
							labelPosition="after"
							style={styles.headlineButton}
							icon={<FontIcon className="fa fa-plus" style={{fontSize: 15}} />}
						/>
						<DisplaysList displays={this.props.displays} />						
					</div>
				</SwipeableViews>				
			</div>
		);
	}
}

export default UserHomePage;