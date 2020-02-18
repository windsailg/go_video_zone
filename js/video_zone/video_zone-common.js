
$('.header').load('header.html');
$('.footer').load('footer.html');  

$(document).ready(function(){
	
	//lazy + focuspoint
	$('.lazy').Lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		effectTime:300, //duration
		throttle:1000,//delay
		// delay: 3000,
		visibleOnly: true,
		onError: function(element) {
			console.log('lazy error loading' + element.data('src'));
		},
		beforeLoad: function(element) {
			// Create virtual img to set imgs src src
			pureLazyfocusepointer(element);
		},
		afterLoad(element){
			element.parent('.focuspoint').delay(500).focusPoint();
			element.addClass('lazied');
		},
		onFinishedAll(){
			// console.log('img Complete');
		},
	});     

	function pureLazyfocusepointer(target){
		var img = new Image();
		img.src = target.data('src');
		var target_focuspoint = target.parent('.focuspoint');
		$(target_focuspoint).attr({
			'data-focus-x':"0.00",
			'data-focus-y':"0.00",
			'data-image-w':img.width,
			'data-image-h':img.height,
		});
	}

	//swiper
	var SubjectListMajor = new Swiper('#SubjectListMajor', {
		slidesPerView: 'auto',
		speed:400,
		grabCursor : true,
		allowTouchMove: true,
		// breakpoints: { 
		// 	601: {
		// 		initialSlide :1,
		// 		centeredSlides :true,
		// 	},
		// },
	});
	var SubjectListMinor = new Swiper('#SubjectListMinor', {
		slidesPerView: 'auto',
		speed:400,
		grabCursor : true,
		allowTouchMove: true,
		breakpoints: { 
			601: {
				initialSlide :1,
				centeredSlides :true,
			},
		},
	});
	var SubjectListMobile = new Swiper('#SubjectListMobile', {
		slidesPerView: 'auto',
		speed:400,
		grabCursor : true,
		allowTouchMove: true,
		breakpoints: { 
			601: {
				initialSlide :1,
				centeredSlides :true,
			},
		},
	});


	function NavHide(){
		$('#SubjectNav').delay(400).hide(0);
		$('#NavMask').fadeOut(100);
		$('#SubjectNavBody').slideUp(100);
		$('html,body').css({
			'overflow': 'visible'
		})
	};


	$('#SubjectNavBody').slideUp(0);
	function NavShow(){
		$('#SubjectNav').show();
		$('#SubjectNavBody').delay(100).slideDown(150);
		$('#NavMask').fadeIn(100);
		$('html,body').css({'overflow': 'hidden'})
	};

	$('#SubjectNavTrigger').click(function(){
		if($(this).hasClass('closeable')){
			NavHide();
			$(this).removeClass('active closeable ');
		}else{
			NavShow();
			$(this).addClass('active closeable');
		}
		$(this).addClass('unclickable');
		setTimeout(() => {
			$(this).removeClass('unclickable');

		}, 300);
	});

	$('#NavClose , #NavMask').click(function(){
		$('#SubjectNavTrigger').removeClass('active closeable');
		NavHide();
	});







});
