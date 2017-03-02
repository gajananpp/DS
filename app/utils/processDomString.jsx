import $ from 'jquery';

export function processDomString(domData) {
	
	$("div.react-draggable", domData).css({cursor: ''});

	$("div.react-draggable", domData).removeClass("react-draggable react-draggable-dragged");
	$("div.ph-border", domData).removeClass("ph-border");

	$(`div[style*="resize"]`, domData).remove();

	return domData;
}