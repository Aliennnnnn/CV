/*
* @Author: Aliennnnnn
* @Date:   2017-05-06 22:27:17
* @Last Modified by:   Aliennnnnn
* @Last Modified time: 2017-09-25 11:23:35
*/
$(document).ready(function(){
	$('#cv').fullpage({
		'verticalCentered': true,
		'css3': true,
		'sectionsColor': ['#26B1B6','#9C58B6','#18E2CB','#C7C8A8'],
		'navigation': true,
		'navigationTooltips':['首页','技能','项目','联系'],
		'loopBottom': true,
		'loopTop': true,
		afterRender: function(){
			$('.sex,.school,.email,.cet,.name,.age,.subtitle').css({
				'display': 'block'
			})
			// $('.head').addClass('animated bounceInDown');
			$('.info,.cet,.email').addClass('animated bounceInLeft');
			$('.name,.school,.subtitle').addClass('animated bounceInRight');
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