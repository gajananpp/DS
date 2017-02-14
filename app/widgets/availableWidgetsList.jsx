import React from 'react';

import ImageWidget from './ImageWidget';
import imageWidgetIcon from '../images/widget-icons/imageWidgetIcon.png';

const availableWidgetsList = [
	{
		"type": "Image Widget",
		"element": <ImageWidget />,
		"imgIcon": imageWidgetIcon,
		"title": "Image Widget",
		"author": "DYP Signage",
	}
];

export default availableWidgetsList;