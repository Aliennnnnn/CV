/*
* @Author: Aliennnnnn
* @Date:   2017-05-06 22:27:17
* @Last Modified by:   Aliennnnnn
* @Last Modified time: 2017-05-08 11:10:46
*/

'use strict';
$(document).ready(function(){
	$('.hello').addClass('animated rubberBand');
	$('#cv').fullpage({
		'verticalCentered': true,
		'css3': true,
		'sectionsColor': ['#22B573','#26B1B6','#9C58B6','#9C58B6'],
		'navigation': true,
		afterLoad: function(anchorLink,index){
			if(index == 2){
				$('.head,.sex,.school,.email,.name,.age,.subtitle').css({
					'display': 'block'
				})
				$('.head').addClass('animated bounceInDown');
				$('.sex,.school,.email').addClass('animated bounceInLeft');
				$('.name,.age,.subtitle').addClass('animated bounceInRight');
			}else if(index == 3){
				$('.skill').css({
					'visibility': 'visible'
				})
				$('.familiar').addClass('animated zoomInDown');
				$('.fast').addClass('animated zoomInUp');
			}
		}
	})
})