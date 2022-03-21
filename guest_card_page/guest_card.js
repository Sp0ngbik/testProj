
function mobile_version_balance_info(){
    $('.balance_cash_process').on('click',function(e){
      if($(e.currentTarget).hasClass('balance_cash_process_active')){
            $(e.currentTarget).removeClass('balance_cash_process_active')
            $(e.currentTarget).children('.balance_log_info_purchase')
            .removeClass('balance_log_info_purchase_active')
      }else{
            $(e.currentTarget).addClass('balance_cash_process_active')
            $(e.currentTarget).children('.balance_log_info_purchase')
            .addClass('balance_log_info_purchase_active')
      }
    })
}

mobile_version_balance_info()


function scrollToTop() {
    $(".go_to_top").hide();
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $("#header_nav_block").addClass("upper_block_container_shadow");
      } else {
        $("#header_nav_block").removeClass("upper_block_container_shadow");
      }
    });
    $(window).scroll(function () {
      let halfSize = $(window).height() / 2;
      if ($(window).scrollTop() > halfSize) {
        $(".go_to_top").show();
      } else {
        $(".go_to_top").hide(700);
      }
    });
    $(".header").on("click", ".go_to_top", function (e) {
      $("body, html").animate({ scrollTop: 0 }, 800);
    });
  }
  
  scrollToTop();