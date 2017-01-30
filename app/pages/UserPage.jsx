import React from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';



// const UserPage = () => (
// 	<Tabs>
// 		<Tab label="Presentations">
// 			<div>
// 				<h1>Presentations</h1>
// 			</div>
// 		</Tab>
// 		<Tab label="Displays">
// 			<div>
// 				<h1>Displays</h1>
// 			</div>
// 		</Tab>
// 	</Tabs>
// );


const styles = {
	slide: {
		padding: 10,
	}
};

class UserPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex : 0,
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
						<h1>Presentations</h1>
					</div>
					<div style={styles.slide}>
						<h1>Displays</h1>
					</div>
				</SwipeableViews>
			</div>
		);
	}
}

export default UserPage;