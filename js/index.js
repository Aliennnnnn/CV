/*
* @Author: Aliennnnnn
* @Date:   2017-05-06 22:27:17
* @Last Modified by:   Aliennnnnn
* @Last Modified time: 2017-09-06 23:32:46
*/
$(document).ready(function(){
	$('#cv').fullpage({
		'verticalCentered': true,
		'css3': true,
		'sectionsColor': ['#26B1B6','#9C58B6','#18E2CB'],
		'navigation': true,
		afterRender: function(){
			$('.head,.sex,.school,.email,.name,.age,.subtitle').css({
				'display': 'block'
			})
			$('.head').addClass('animated bounceInDown');
			$('.sex,.school,.email').addClass('animated bounceInLeft');
			$('.name,.age,.subtitle').addClass('animated bounceInRight');
		},
		afterLoad: function(anchorLink,index){
			if(index == 2){
				$('.skill').css({
					'visibility': 'visible'
				})
				$('.familiar').addClass('animated zoomInDown');
				$('.fast').addClass('animated zoomInUp');
			}
		}
	})
})