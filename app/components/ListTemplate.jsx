import React from  'react';

import { Card, CardHeader } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
	itemStyle : {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
};

class ListTemplate extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: 0,
		};
	}

	handleItemHover(event, item) {
		console.log('highlight-item');
	}   

	handleClick = (event, index) => {
		console.log(index);
		this.props.item.removeWidget(index);
	}

	render() {
		const { item, itemSelected, dragHandle } = this.props;
		const {value} = this.state;
		const scale = itemSelected * 0.05 + 1;
		const shadow = itemSelected * 15 + 1;
		const dragged = itemSelected !== 0;

		const cardHeaderChildren = (
			<div style={{ ...styles.itemStyle, transform: `scale(${scale})`, boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2*shadow}px 0px` }} className="highlight" onMouseOver={(event) => this.handleItemHover(event, item) } >
				<IconButton iconClassName="fa fa-trash" onClick={(event) => this.handleClick(event, item.dynamicIndex) } />
				<span>{item.name}</span>
				{dragHandle(<FontIcon className="fa fa-bars" />)}
			</div>
		); 

		return (
			<div>
				{cardHeaderChildren}
			</div>
		);
	}
}

export default ListTemplate;