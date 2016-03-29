

(function($) {
	$.fn.snow = function(options) {
		 //<!CDATA[

		var $flake = $('<div />').css({
			'position': 'fixed',
			'top': '-50px',
			'z-index': '1000'
		});
		var documentHeight = document.documentElement.clientHeight; //$(document).height(); 
		var documentWidth = $(document).width();
		var defaults = {
			minSize: 5,
			maxSize: 10,
			newOn: 600,
			flakeColor: "#FFFFFF"
		};
		var options = $.extend({},
		defaults, options);
		var interval = setInterval(function() {
	        var imgArray = [];
	        imgArray[0] = "url(images/item/snow-ufo-1.png)";
	        imgArray[1] = "url(images/item/snow-light-1.png)";
	        imgArray[2] = "url(images/item/snow-meteor-1.png)";
	        imgArray[3] = "url(images/item/snow-ufo-2.png)";
	        imgArray[4] = "url(images/item/snow-light-2.png)";
	        imgArray[5] = "url(images/item/snow-meteor-2.png)";
	        imgArray[6] = "url(images/item/snow-ufo-3.png)";
	        imgArray[7] = "url(images/item/snow-light-3.png)";
	        imgArray[8] = "url(images/item/snow-meteor-3.png)";

			var startPositionLeft = Math.random() * documentWidth;
			var startOpacity = 0.5 + Math.random();
			var sizeFlake = options.minSize + Math.random() * options.maxSize;
			var endPositionTop = documentHeight - 40;
			var endPositionLeft = startPositionLeft + Math.random() * 200;
			var durationFall = documentHeight * 10 + Math.random() * 5000;
	        var randomBgIndex = Math.round( Math.random() * 8 );
	        var imgUrl = imgArray[randomBgIndex];


			$flake.clone().appendTo('body').css({
				width: 40,
				height: 40,
				"background-image": imgUrl,
				"background-repeat": "no-repeat",
				"background-size": "100% 100%",
				left: startPositionLeft,
				opacity: startOpacity,
				'font-size': sizeFlake,
				color: options.flakeColor
			}).animate({
				top: endPositionTop,
				left: endPositionLeft,
				opacity: 1
			},
			durationFall, 'linear',
			function() {
				$(this).remove();
			});
		},
		options.newOn); //interval End 
	}; //$.fn.snow End 
})(jQuery);