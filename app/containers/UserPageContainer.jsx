import { connect } from 'react-redux';
import UserPage from '../pages/UserPage';

const mapStateToProps = (state) => {
	return {
		presentations: state.user.userInfo.userData &&  state.user.userInfo.userData.presentations || [],
		displays: state.user.userInfo.userData &&  state.user.userInfo.userData.displays || []
	};
};

const UserPageContainer = connect(mapStateToProps)(UserPage);

export default UserPageContainer;