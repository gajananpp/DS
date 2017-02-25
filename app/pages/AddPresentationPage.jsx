import React from 'react';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { GridList, GridTile } from 'material-ui/GridList';

import DraggableList from 'react-draggable-list';

import { Scrollbars } from 'react-custom-scrollbars';

import { SketchPicker } from 'react-color';

import ListTemplate from '../components/ListTemplate';
import ArtBoard from '../components/ArtBoard';


import mainCSS from '../css/main.css';

import availableWidgetsList from '../widgets/availableWidgetsList';


// import ImageWidget from '../widgets/ImageWidget';

const styles = {
	popover : {
    	position: 'absolute',
      	zIndex: '2',
    },
    cover : {
      	position: 'fixed',
      	top: '0px',
      	right: '0px',
      	bottom: '0px',
      	left: '0px',
    },
    gridStyles : {
  		root: {
    		display: 'flex',
    		flexWrap: 'wrap',
    		justifyContent: 'flex-start',
  		},
  		gridList: {
    		width: 500,
    		height: 450,
    		overflowY: 'auto',
  		},
	},
};


const screenResolutions = [
	[1024, 768],
	[1280, 1024],
	[1600, 1200],
	[1280, 720],
	[1280, 768],
	[1360, 768],
	[1366, 768],
	[1440, 900],
	[1680, 1050],
	[1920, 1080],
	[3840, 2160]
];


class AddPresentationPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dialogOpen: true,

			presentationName: '',
			screenResolution: {
				width: 1024,
				height: 768,
				currentIndex: 0
			},
			backgroundImgURL: '',
			backgroundColor: {
				r: '255',
      			g: '255',
      			b: '255',
      			a: '100',
			},

			displayColorPicker: false,
			widgetSettingsDialogOpen: false,
			addWidgetDialogOpen: false,

			widgetsUsed: [],
		};
	}

	handlePresentationDialogOpen = () => {
		this.setState({
			dialogOpen: true,
		});
	}


	handleClose = () => {
		this.setState({
			dialogOpen: false,
			addWidgetDialogOpen: false
		});
	}

	handleInputName(event, text) {
		this.setState({
			presentationName: text
		});
	}

	handleInputResolution(event, key, value) {
		this.setState({
			screenResolution: {
				width: screenResolutions[value][0],
				height: screenResolutions[value][1],
				currentIndex: value
			}
		});
	}

	handleColorPickerClick() {
		this.setState({
			displayColorPicker: !this.state.displayColorPicker,
		});
	}

	handleColorPickerClose() {
		this.setState({
			displayColorPicker: false,
		});
	}

	handleImgURLInput = (event, text) => {
		this.setState({
			backgroundImgURL: text,
		});
	}

	handleColorChange = (color) => {
		// console.log(color);
		this.setState({
			backgroundImgURL: '',
			backgroundColor: color.rgb,
		});
	}

	openWidgetStore() {
		this.setState({
			addWidgetDialogOpen: true
		});
	}

	openWidgetSettingsDialog(obj) {
		this.setState({
			widgetSettingsDialogOpen: !this.state.widgetSettingsDialogOpen,
		});
	}

	addWidgetToArray(event, tile) {
		let index = this.state.widgetsUsed.length;
		this.setState({
			widgetsUsed: this.state.widgetsUsed.concat([{ "dynamicIndex": index, "widgetIndex": index, "name": `${tile.type} ${index}`, "type": tile.type, "element": tile.element, "removeWidget": this.removeWidgetFromArray }]),
		});
		console.log(this.state.widgetsUsed);
	}

	removeWidgetFromArray = (index) => {
		let arr = this.state.widgetsUsed;
		arr.splice(index, 1);
		this.setState({
			widgetsUsed: arr,
		});
		arr = arr.map((obj, index) => {
			obj.dynamicIndex = index;
		});
		console.log('arr');
	}

	handleListChange(newList) {
		// console.log(newList);
		this.setState({
			widgetsUsed: newList,
		});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log("ok");
	}

	render() {

		return (
			<div>
				<div style={{display: 'flex', flexDirection: 'row', height: "85vh"}}>
					<div
						style={{width: "20%", height: "85vh"}}
					>
						<div className={mainCSS.editPresentation}>
							<div style={{textAlign: 'center', fontSize: 20, color:'white', backgroundColor: 'grey', height: 50}} onClick={ this.handlePresentationDialogOpen }>
								<span style={{lineHeight: 2.5}}>{this.state.presentationName}</span>
							</div>
						</div>
						<List style={{padding: 0}}>
							<ListItem primaryText="Add Widget" onClick={() => this.openWidgetStore()} leftIcon={<FontIcon className="fa fa-plus" />} />
							<Divider />
							{/* this.state.widgetsUsed.map((obj, index, arr) => (
								<ListItem key={index} primaryText={`${obj.type} ${index}`} onClick={ () => this.openWidgetSettingsDialog(obj) } leftIcon={<FontIcon className="fa fa-pencil" />} />
							)) */}
							<Scrollbars style={{width: "100%", height: "70vh"}}>
								<div>
									<DraggableList
										list={this.state.widgetsUsed}
										itemKey={"widgetIndex"}
										template={ListTemplate}
										onMoveEnd={ (newList) => this.handleListChange(newList) }
									/>
								</div>
							</Scrollbars>
						</List>
					</div>
					<div
						style={{width: "80%", height: "84.5vh", border: '1px solid black', outline: '5px solid grey', overflow: 'auto'}}
						 id="presentation-artboard"
					>
						

						<ArtBoard 
							width={this.state.screenResolution.width} 
							height={this.state.screenResolution.height} 
							backgroundColor={`rgba(${ this.state.backgroundColor.r }, ${ this.state.backgroundColor.g }, ${ this.state.backgroundColor.b }, ${ this.state.backgroundColor.a })`}
							backgroundImgURL={this.state.backgroundImgURL}
							widgetsUsed={this.state.widgetsUsed} 
						/>
					</div>
				</div>
				




				<Dialog
					title="Presentation Settings"
					modal={true}
					actions={<RaisedButton label="Ok" primary={true} onClick={this.handleClose} />}
					open={this.state.dialogOpen}
				>
					<div>
						<div id="presenation-name" style={{}}>
							<TextField name="presentationName" hintText="Enter Presentation Name" defaultValue={this.state.presentationName} onChange={(event, text) => this.handleInputName(event, text)} />
						</div>
						<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
							<span style={{marginRight: 5}}>Display Size: </span> 
							<DropDownMenu
								name="screenResolution"
								value={this.state.screenResolution.currentIndex}
								style={{marginTop: -10}}
								onChange={(event, key, value) => this.handleInputResolution(event, key, value)}
							>	
								{screenResolutions.map((resolution, index) => (
									<MenuItem key={index} value={index} primaryText={`${resolution[0]}x${resolution[1]}`} />
								))}
							</DropDownMenu>
						</div>
						<div>
							<label>
								<span  style={{marginRight: 30}}>Background:</span>
								<TextField name="backgroundImgURL" hintText="Image Link" defaultValue={this.state.backgroundImgURL} onChange={this.handleImgURLInput} />
							</label>
							<span style={{marginLeft: 30, marginRight: 40}}>Or</span>
							<div style={{display: 'inline-block'}}>
								<RaisedButton label="CHOOSE COLOR" onClick={() => { this.handleColorPickerClick()} }/>
								{this.state.displayColorPicker ? <div style={ styles.popover }> 
									<div 
										onClick={() => { this.handleColorPickerClose() }}
										style={ styles.cover }
									/>
										<SketchPicker color={this.state.backgroundColor} onChange={this.handleColorChange} />
								</div> : null}
							</div>
						</div>
					</div>
				</Dialog>

				

				<Dialog
					title="Widget Store"
					modal={true}
					contentStyle={{width: '100%', maxWidth: 'none'}}
					actions={<RaisedButton label="Cancel" primary={true} onClick={this.handleClose} />}
					open={this.state.addWidgetDialogOpen}
				>
					Select Widget
					<div style={styles.gridStyles.root} >
						<GridList
							cellHeight={180}
							style={styles.gridStyles.gridList}
						>
							{ availableWidgetsList.map((tile, index) => (
								<GridTile
									key={index}
									title={tile.title}
									subtitle={<span>by <b>{tile.author}</b></span>}
									style={{cursor: 'pointer'}}
									onClick={(event) => this.addWidgetToArray(event, tile, index) }
								>
									<img src={tile.imgIcon} />
								</GridTile>
							)) }
						</GridList>
					</div>
				</Dialog>

			</div>
		);
	}
}

export default AddPresentationPage;