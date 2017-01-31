import React from 'react';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

class PresentationsList extends React.Component {
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
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Modified</TableHeaderColumn>
							<TableHeaderColumn>Created</TableHeaderColumn>
							<TableHeaderColumn>Status</TableHeaderColumn>
							<TableHeaderColumn width={65}></TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
						showRowHover={true}
						displayRowCheckbox={false}
					>
						{this.props.presentations.map((obj, index) => (
							<TableRow key={index}>
								<TableRowColumn width={20}>{index + 1}</TableRowColumn>
								<TableRowColumn><b>{obj.presentationName}</b></TableRowColumn>
								<TableRowColumn>{this.formatDateTime(obj.modifiedOn)}</TableRowColumn>
								<TableRowColumn>{this.formatDateTime(obj.createdOn)}</TableRowColumn>
								<TableRowColumn>{obj.isPublished ? <span style={{color: 'green'}}>Published</span> : <span style={{color: 'red'}}>Unpublished</span>}</TableRowColumn>
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

export default PresentationsList;