import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createDndPlugin from 'draft-js-dnd-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import { convertFromRaw, EditorState } from 'draft-js';

import createDraggableDivPlugin from './DraggableDiv';

const dndPlugin = createDndPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();

const decorator = composeDecorators(
	resizeablePlugin.decorator,
	focusPlugin.decorator,
	dndPlugin.decorator
);

const draggableDivPlugin = createDraggableDivPlugin({ decorator });

const plugins = [
	dndPlugin,
	focusPlugin,
	resizeablePlugin,
	draggableDivPlugin
];

// function draggableBlockRenderer(contentBlock) {
// 	const type = contentBlock.getType();
// 	if (type === "unstyled") {
// 		return {
// 			component: decorator(DraggableDiv),
// 			editable: false,
// 			props: {
// 				foo: 'bar'
// 			},
// 		};
// 	}
// }


const initialState = {
    "entityMap": {
        "0": {
            "type": "colorBlock",
            "mutability": "IMMUTABLE",
            "data": {}
        }
    },
    "blocks": [{
        "key": "9gm3s",
        "text": "This is a simple example. Hover the block and change the with by dragging the mouse.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }, {
        "key": "ov7r",
        "text": " ",
        "type": "atomic",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [{
            "offset": 0,
            "length": 1,
            "key": 0
        }],
        "data": {}
    }, {
        "key": "e23a8",
        "text": "More text here …",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
    }]
};

class ArtBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createWithContent(convertFromRaw(initialState)),
		};
	}

	handleChange = (editorState) => {
		this.setState({
			editorState,
		});
	};

	focus = () => {
		this.editor.focus();
	};

	render() {
		console.log();
		return (
			<Scrollbars>
				<div style={{width: this.props.width, height: this.props.height}} onClick={this.focus}>
					<Editor
						editorState={this.state.editorState}
						onChange={this.handleChange}
						plugins={plugins}
						ref={(element) => { this.editor = element; }}
					/>
				</div>
			</Scrollbars>
		);
	}
}

export default ArtBoard;