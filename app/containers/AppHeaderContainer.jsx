import { connect } from 'react-redux';
import AppHeader from '../components/AppHeader';

const mapStateToProps = (state) => {
	return {
		authenticated: state.user.authenticated,
		userInfo: state.user.userInfo || {}
	};
};

const AppHeaderContainer = connect(
	mapStateToProps
)(AppHeader);

export default AppHeaderContainer;