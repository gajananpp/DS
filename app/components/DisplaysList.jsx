import React from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class DisplaysList extends React.Component {
	constructor(props) {
		super(props);
		
	}

	formatDateTime(date) {
		date = new Date(date);
		let day = date.getDate().toString().length === 2 ? date.getDate() : '0' + date.getDate();
		let month = date.getMonth().toString().length === 2 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
		let year = date.getFullYear().toString().substr(2, 4);
		return `${day}/${month}/${year}`;
	}

	render() {
		return (
			<div>
				<Table
					fixedHeader = {true}
					multiSelectable = {false}
				>
					<TableHeader
						displaySelectAll = {false}
						adjustForCheckbox = {false}
						enableSelectAll = {false}
					>
						<TableRow>
							<TableHeaderColumn width={20}>Sr. no.</TableHeaderColumn>
							<TableHeaderColumn>Display Name</TableHeaderColumn>
							<TableHeaderColumn>Resolution</TableHeaderColumn>
							<TableHeaderColumn>Created</TableHeaderColumn>
							<TableHeaderColumn>Status</TableHeaderColumn>
							<TableHeaderColumn width={65}></TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
						showRowHover={true}
						displayRowCheckbox={false}
					>
						{this.props.displays.map((obj, index) => (
							<TableRow key={index}>
								<TableRowColumn width={20}>{index + 1}</TableRowColumn>
								<TableRowColumn><b>{obj.displayName}</b></TableRowColumn>
								<TableRowColumn>{obj.Resolution}</TableRowColumn>
								<TableRowColumn>{this.formatDateTime(obj.createdOn)}</TableRowColumn>
								<TableRowColumn>{obj.isOnline ? <span style={{color: 'green'}}>Online</span> : <span style={{color: 'red'}}>Offline</span>}</TableRowColumn>
								<TableRowColumn width={65}>
									<FlatButton 
										label="Edit"
										labelPosition="after"
										icon={<FontIcon className="fa fa-pencil" style={{fontSize: 12}}/>}
									/>
								</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	}
}

export default DisplaysList;