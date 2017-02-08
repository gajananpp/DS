import React from 'react';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import logoIcon from '../images/logo.png';


const styles = {
	AppBar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 0
	},
	FontIcon: {
		fontSize: 20,
		color: 'white'
	},
	ProfileInfo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: 10,
		paddingLeft: 10,
		span: {
			name: {
				marginLeft: 10,
				color: 'white'
			},
			email: {
				marginLeft: 10,
				color: 'white',
				fontSize: 13,				
			},
		},
	},
}


const AppBarChildren = ({ authenticated, userInfo, self }) => (
	authenticated ? 
	<div id="profile-info-holder">
		<FlatButton 
			onClick = {() => self.setState({open: true})}
			style = {{height: 65, paddingRight: 0}}
			children = {
				<div id="profile-info" style={styles.ProfileInfo}>
					<Avatar 
						src={userInfo.picture}
					/>
					<div style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'flex-start',
						lineHeight: 1.5
					}}>
						<span style={styles.ProfileInfo.span.name}>{userInfo.displayName}</span>
						<span style={styles.ProfileInfo.span.email}>{userInfo.email}</span>
					</div>
				</div>				
			}
		/>
	</div> :
	<div>
		<FlatButton 
			href="/auth/google" 
			label="Sign In" 
			labelStyle={{color: 'white'}} 
			icon={<FontIcon className="fa fa-sign-in" style={styles.FontIcon} />} 
		/>
	</div>
);

// const AppHeader = ({ authenticated, userInfo }) => (
// 	<div>
// 		<AppBar 
// 			title={<span>Digital Signage</span>}
// 			showMenuIconButton={false}
// 			style={styles.AppBar}
// 			children={<AppBarChildren authenticated={authenticated} userInfo={userInfo} />}
// 		/>
// 	</div>

// );
let anchorEl;

class AppHeader extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			open: false,
		};
	}

	handleRequestClose = () => {
    	this.setState({
      		open: false,
    	});
  	};

  	componentDidMount() {
  		anchorEl = document.getElementById('profile-info-holder');
  	}

	render() {
		return (
			<div>
				<AppBar 
					iconElementLeft={<img src={logoIcon} width={220}/>}
					showMenuIconButton={true}
					style={styles.AppBar}
					children={<AppBarChildren authenticated={this.props.authenticated} userInfo={this.props.userInfo} self={this}/>}
				/>
				<Popover
          			open={this.state.open}
          			anchorEl={anchorEl}
          			anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          			targetOrigin={{horizontal: 'left', vertical: 'top'}}
          			onRequestClose={this.handleRequestClose}
        		>
          			<Menu>
            			<MenuItem 
            				primaryText="Sign out" 
            				onClick={() => window.location.pathname = '\/logout'}
            				leftIcon={<FontIcon className="fa fa-sign-out" />}
            			/>
          			</Menu>
        		</Popover>
			</div>
		);
	}
}

export default AppHeader;