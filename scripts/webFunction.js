/*
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-12-15 15:34:48
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-12-16 16:24:18
 */
$(function () {
  if ($('#webIndex').length) {
    $(this).on('scroll',function(){
      let top = $(this).scrollTop()
      if(top>200) {
        $("#web .webIndex nav").addClass('navBlack')
      } else {
        $("#web .webIndex nav").removeClass('navBlack')
      }
    })
    $('#menuIcon').on('click', function () {
      if ($(this).hasClass('showMenu')) {
        hideMenu();
      } else {
        showMenu();
      }
    })
    $('#web #webNav a').on('click',function(){
			var sort = $(this).parent().index(), height = 0, delta = 0;
			if (sort != 0) {
				height = $('.webPage[data-sort='+(sort-1)+']').height() + $('.webPage[data-sort='+(sort-1)+']').offset().top;
			}
			$('body,html').animate({
				scrollTop: height+20
			},500);
		})
  }
})

// 收起菜单
function hideMenu(){
	$('#webNav,#menu,#menuIcon').removeClass('showMenu');
}
// 展开菜单
function showMenu(){
	$('#webNav,#menu,#menuIcon').addClass('showMenu');
}
