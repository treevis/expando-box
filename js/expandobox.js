function showBox(el) {
	$(el).animate({
		'height': '35.4375em',
		'left': 0,
		'top': 0,
		'width': '100%'
	},250);
}

function hideBox(el) {
	$(el).animate({
		'height': '10.5625em',
		'left': '68.75%',
		'top': '24.875em',
		'width': '31.25%'
	},125);
}

function expandoBox() {
	var $viewAll = $('a.view-all');
	$viewAll.hover(
		function() {
			showBox($(this));
		},
		function() {
			hideBox($(this));
		}
	);
	
	$viewAll.focus(
		function() {
			showBox($(this));
		}
	);
	$viewAll.blur(
		function() {
			hideBox($(this));
		}
	);
}

$(document).ready(function() {

	var $html = $('html'),
		$body = $('body');

	if( !$html.hasClass('csstransitions') ) {
		expandoBox();
	}

});
