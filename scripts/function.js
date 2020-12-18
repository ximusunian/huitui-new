$(function(){
	if ($('#index').length) {
		$(this).on('scroll',function(){
			var top = $(this).scrollTop(),
					height = $(window).height(),
					delta = 50; /*动画触发偏移量*/
			$('.scroll').each(function(){
				var _top = $(this).offset().top,
						_height = $(this).height() + parseFloat($(this).css('padding-top').substring(0,$(this).css('padding-top').indexOf('px'))) + parseFloat($(this).css('padding-bottom').substring(0,$(this).css('padding-bottom').indexOf('px'))),
						style = $(this).attr('data-class');
				if (top + height > _top - delta && top < _top + _height) {
					if (!$(this).hasClass(style)) {
						$(this).addClass(style);
					}
				} else if (top + height > _top + _height || top + height < _top) {
					if ($(this).hasClass(style)) {
						$(this).removeClass(style);
					}
				}
			})
			$('.page').each(function(){
				var _top = $(this).offset().top,
						sort = parseInt($(this).attr('data-sort'));
				if (top + 100 >= _top) {
					$('#pc #nav li a').removeClass('on');
					$('#pc #nav li').eq(sort).find('a').addClass('on');
				}
			})
		})
		// 点击logo
		$('#goTop').on('click',function(){
			$('body,html').animate({
				scrollTop: 0
			},500);
		})
		// 导航点击
		$('#pc #nav a').on('click',function(){
			var sort = $(this).parent().index(), height = 0, delta = 0;
			if (sort != 0) {
				height = $('.page[data-sort='+(sort-1)+']').height() + $('.page[data-sort='+(sort-1)+']').offset().top;
			}
			$('body,html').animate({
				scrollTop: height
			},500);
		})
		// 下滑
		$("#pullDown").on('click', function() {
			let height = $('.page[data-sort=0]').height() + $('.page[data-sort=0]').offset().top;
			$('body,html').animate({
				scrollTop: height + 100
			},500);
		})
		// 立即咨询
		$("#consultBtn").on('click', function() {
			let height = $('.page[data-sort=5]').height() + $('.page[data-sort=5]').offset().top;
			$('body,html').animate({
				scrollTop: height + 100
			},1500);
		})
	}
})
