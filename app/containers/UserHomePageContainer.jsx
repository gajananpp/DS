import { connect } from 'react-redux';
import UserHomePage from '../pages/UserHomePage';

const mapStateToProps = (state) => {
	return {
		presentations: state.user.userInfo.userData &&  state.user.userInfo.userData.presentations || [],
		displays: state.user.userInfo.userData &&  state.user.userInfo.userData.displays || []
	};
};

const UserHomePageContainer = connect(mapStateToProps)(UserHomePage);

export default UserHomePageContainer;