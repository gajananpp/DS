import React from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { Scrollbars } from 'react-custom-scrollbars';
import { stateToHTML } from 'draft-js-export-html';
import DraggableDiv from './DraggableDiv';

import $ from 'jquery';



class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
		};
	}



	componentDidUpdate() {
		console.log('artboard-updated');
		console.log(this.props.widgetsUsed);
		// console.log(document.getElementById('presentation-artboard').innerHTML.toString());
	}

	componentDidMount() {
		// let artBoardPos = {};
		// let offset = $("#sb-wrapper").offset();
		// // console.log(offset);

		// let canvasEl = document.getElementById("mouse-sniper");
		// let ctx = canvasEl.getContext('2d');

		// console.log(canvasEl);

		// $("#sb-wrapper").on("mousemove", (event) => {
		// 		console.log(event.pageX, event.pageY);
		// 		ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
				
		// 		ctx.beginPath();
		// 		ctx.moveTo(event.pageX - offset.left, 0);
		// 		ctx.lineTo(event.pageX - offset.left, event.pageY - offset.top);
		// 		ctx.stroke();
				
		// 		ctx.beginPath();
		// 		ctx.moveTo(0, event.pageY - offset.top);
		// 		ctx.lineTo(event.pageX - offset.left, event.pageY - offset.top);
		// 		ctx.stroke();

		// 		ctx.beginPath();
		// 		ctx.moveTo(canvasEl.width, event.pageY - offset.top);
		// 		ctx.lineTo(event.pageX - offset.left, event.pageY - offset.top);
		// 		ctx.stroke();

		// 		ctx.beginPath();
		// 		ctx.moveTo(event.pageX - offset.left, canvasEl.height);
		// 		ctx.lineTo(event.pageX - offset.left, event.pageY - offset.top);
		// 		ctx.stroke();

		// });
		// 
		// let tooltipEl = $("#position-tooltip")[0];
		
		// let tooltipPositions = {
		// 	top: tooltipEl.style.top,
		// 	left: tooltipEl.style.left,
		// 	bottom: tooltipEl.style.bottom,
		// 	right: tooltipEl.style.right 
		// }; 
		
		 
		let container = $("#sb-wrapper > div")[0]
		console.log(container);

		let canvasEl = $("#mouse-sniper")[0];
		let ctx = canvasEl.getContext('2d');
		
		container.addEventListener("mousemove", (e) => {
			let rect = container.getBoundingClientRect();

			let x = e.clientX + container.scrollLeft - rect.left;
			let y = e.clientY + container.scrollTop - rect.top;

			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

			if (y > this.props.height/2) {
				$("#position-tooltip")[0].style.top = `${y-130}px`;
				$("#position-tooltip")[0].style.left = `${x+15}px`;
			} else {
				$("#position-tooltip")[0].style.top = `${y+15}px`;
				$("#position-tooltip")[0].style.left = `${x+15}px`;
			}

			if (x > this.props.width/2) {
				$("#position-tooltip")[0].style.top = `${y+15}px`;
				$("#position-tooltip")[0].style.left = `${x-130}px`;
			} else {
				$("#position-tooltip")[0].style.top = `${y+15}px`;
				$("#position-tooltip")[0].style.left = `${x+15}px`;
			}


			$("#top-pos").text(`Top: ${Math.round(y)} px`);
			$("#left-pos").text(`Left: ${Math.round(x)} px`);
			$("#bottom-pos").text(`Bottom: ${Math.round(canvasEl.height - y)} px`);
			$("#right-pos").text(`Right: ${Math.round(canvasEl.width - x)} px`);
				
			ctx.beginPath();
			ctx.moveTo(x, 0);
			ctx.lineTo(x, y);
			ctx.stroke();
				
			ctx.beginPath();
			ctx.moveTo(0, y);
			ctx.lineTo(x, y);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(canvasEl.width, y);
			ctx.lineTo(x, y);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x, canvasEl.height);
			ctx.lineTo(x, y);
			ctx.stroke();



			// console.log(x, y);
		});
		
		
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log($("#artboard-presentation-ph").html());
		// console.log(this.artboard);
	}

	render() {
				// console.log(document.getElementById('presentation-artboard').innerHTML.toString());

		return (
			<Scrollbars id="sb-wrapper">
			<div id="artboard-wrapper">
				<canvas id="mouse-sniper" width={this.props.width} height={this.props.height} style={{position: "absolute", top: "0", left: "0", zIndex: 1000, opacity: 0.5, pointerEvents: 'none'}}></canvas>
				<span id="position-tooltip" style={{position: "absolute", top: "0", left: "0", zIndex: 1000, opacity: 0.5, pointerEvents: 'none', backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: 10, whiteSpace: 'nowrap'}}>
					<span id="top-pos"></span><br />
					<span id="left-pos"></span><br />
					<span id="bottom-pos"></span><br />
					<span id="right-pos"></span>
				</span>
				<div id="artboard-presentation-ph">
					<div id="presentation" ref={artboard => this.artboard = artboard} style={{width: this.props.width, height: this.props.height, background: this.props.backgroundColor + ` url(${this.props.backgroundImgURL})`, position: 'absolute', top: 0, left: 0 }}>
						{ this.props.widgetsUsed.map((obj, index) => (
							<DraggableDiv zIndex={obj.widgetIndex} key={index}>{obj.element}</DraggableDiv>
						)) }
					</div>
				</div>
			</div>
			</Scrollbars>
		);
	}
}

export default ArtBoard;