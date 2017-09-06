/*
* @Author: Aliennnnnn
* @Date:   2017-05-06 22:27:17
* @Last Modified by:   Aliennnnnn
<<<<<<< HEAD
* @Last Modified time: 2017-05-08 20:48:41
=======
* @Last Modified time: 2017-09-06 23:23:01
>>>>>>> refs/remotes/origin/master
*/
$(document).ready(function(){
	$('.hello').addClass('animated rubberBand');
	$('#cv').fullpage({
		'verticalCentered': true,
		'css3': true,
<<<<<<< HEAD
		'sectionsColor': ['#22B573','#26B1B6','#9C58B6','#18e2cb'],
=======
		'sectionsColor': ['#26B1B6','#9C58B6','#18E2CB'],
>>>>>>> refs/remotes/origin/master
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
<<<<<<< HEAD
				$('.head,.sex,.school,.email,.name,.age,.subtitle').css({
					'display': 'block'
				})
				$('.head').addClass('animated bounceInDown');
				$('.sex,.school,.email').addClass('animated bounceInLeft');
				$('.name,.age,.subtitle').addClass('animated bounceInRight');
			}else if(index == 3){
=======
>>>>>>> refs/remotes/origin/master
				$('.skill').css({
					'visibility': 'visible'
				})
				$('.familiar').addClass('animated zoomInDown');
				$('.fast').addClass('animated zoomInUp');
			}
		}
	})
<<<<<<< HEAD
})
=======
})
>>>>>>> refs/remotes/origin/master
