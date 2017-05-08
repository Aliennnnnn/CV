/*
* @Author: Aliennnnnn
* @Date:   2017-05-06 22:27:17
* @Last Modified by:   Aliennnnnn
* @Last Modified time: 2017-05-08 11:07:12
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
			//var loadedSection = $(this);
			if(index == 2){
				// eleMove($('.name'))
				// eleMove($('.age'))
				// eleMove($('.subtitle'))
				// eleMove($('.sex'))
				// eleMove($('.email'))
				// eleMove($('.school'))
				$('.head,.sex,.school,.email,.name,.age,.subtitle').css({
					'display': 'block'
				})
				$('.head').addClass('animated bounceInDown');
				$('.sex,.school,.email').addClass('animated bounceInLeft');
				$('.name,.age,.subtitle').addClass('animated bounceInRight');
			}else if(index == 3){
				// sizeChange($('.fast'),'slow')
				// sizeChange($('.familiar'),1500)
				$('.skill').css({
					'visibility': 'visible'
				})
				$('.familiar').addClass('animated zoomInDown');
				$('.fast').addClass('animated zoomInUp');
			}
		}
	})

	//元素从左右进入页面
	function eleMove(ele){
		ele.animate({
			left :'0px'
		},"easing")
		
	}

	function sizeChange(ele,speed){
		ele.animate({
			opacity: 1
		},speed);
	}
})