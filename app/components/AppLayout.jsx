import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red100, red500, red700} from 'material-ui/styles/colors';
import AppHeaderContainer from '../containers/AppHeaderContainer';
import Page from '../pages/Page';
import { title, meta, link, style, noscript } from '../pages/assets';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    primary3Color: red100,
  },
  userAgent: "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36",
});


class AppLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Page title={title} meta={meta} link={link} style={style} noscript={noscript}>
				<MuiThemeProvider muiTheme={muiTheme}>
					<div>
						<AppHeaderContainer />
						{this.props.children}
					</div>
				</MuiThemeProvider>
			</Page>
		);
	}
} 

export default AppLayout;