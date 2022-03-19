function owlConfig (){
  //Owl Carousel
  let owl = $('.owl-carousel');
  owl.owlCarousel({
    items:1,
    margin:0,
    loop:true,
    nav:false,
    dots:true,
    dotsContainer: $('#custom_owl_dots')
  })
  $('#custom_owl_dots').on('click','a',function(){
    owl.trigger('to.owl.carousel',[$(this).index(),300]);
  })
  
}

owlConfig()

function mainSlideSelect() {
  let slider = $("#main_slide");
  let nav_links = $("*#up_slide_nav");
  let mobile_version_title = $("#mob_ver_title");
  nav_links.on("click", function (e) {
    slider.attr("src", $(e.target).attr("data-src"));
    mobile_version_title.text($(e.target).text());
  });
}
mainSlideSelect();

function scrollToTop(){
  $('.go_to_top').hide()
  $(window).scroll(function(){
    if($(window).scrollTop()>0){
      $('#header_nav').addClass('upper_block_container_shadow')
    }else{
      $('#header_nav').removeClass('upper_block_container_shadow')
    }
  })
  $(window).scroll(function(){
    let halfSize= $(window).height()/2
    if($(window).scrollTop()>halfSize){
      $('.go_to_top').show()
    }else{
      $('.go_to_top').hide(700)
    }
  })
$('.header').on('click','.go_to_top',function(e){
  $('body, html').animate({scrollTop:0},800); 
})
}

scrollToTop()

function mapAddressSwitcher(){
  $('.adress').addClass('activeSwitch')
  $('.first_block a').not('.adress-filter').hide()
  $('.adress_map div').on('click',function(e){
    $('.adress_map div').removeClass('activeSwitch')
    $(e.target).addClass('activeSwitch')
    let filterValue = $(e.target).attr('data-adress-map-filter')
    $('.first_block a').filter('.'+filterValue).show()
    $('.first_block a').not('.'+filterValue).hide()
    if(filterValue=='map-filter'){
      $('.first_block').removeClass('our_adress_and_food').addClass('map_block')
    }else{
      $('.first_block').removeClass('map_block').addClass('our_adress_and_food')
    }
  })
}
mapAddressSwitcher()

function  scrollToBlock(){
  let links_block = $('#mySidebar a')
  links_block.on('click',function(e){
  let positionBlock = $(e.target).attr('href')
  if($(positionBlock).length)
  {
    let toTop = $(positionBlock).offset().top;
    closeNav()
    $('body, html').animate({scrollTop:toTop},800)
  }
  })
}
scrollToBlock()


function desertSelector(){
  let item = $('.food_info');
  let firstChildAttr = $('.food_nav_bar div:first-child',).attr('data-filter')
  $(item).not('.desert_filter').hide();
  $(item).filter('.desert_filter').hide();
  let slicerBeforeClick = $(item).filter($('.'+firstChildAttr));
  slicerBeforeClick.slice(0,3).show();
  $('.deserts').addClass('food_nav_bar_active')
  $('.food_nav_bar').on('click', function(e){
   let checkValue = $(e.target).attr("data-filter");
   let rightFilter = $(item).filter('.'+checkValue);
   let slicer = rightFilter.slice(0,3)
 $(slicer).filter('.'+checkValue).show();
  $(item).not('.'+checkValue).hide();
  $('.food_more_button').attr('data-filter',checkValue)
 $('.food_nav_bar div').removeClass('food_nav_bar_active');
  $(e.target).addClass('food_nav_bar_active')
})}
$('.food_more_button').on('click',function(){
  let dataAttribute = $('.food_more_button').attr('data-filter')
  $('.food_info').filter('.'+dataAttribute).show()
  $('.food_info').not('.'+dataAttribute).hide()
})

desertSelector();


function openNav() {
  document.getElementById("mySidebar").className = "sidebarActive";
  document.getElementById("shadow_side_bar").className =
    "shadow_side_bar_active";
  if($(window).width()<="560"){
    $('openbtn_image').attr('data-change-img','times-img')
  }  
}


function closeNav() {
  document.getElementById("mySidebar").className = "sidebarOff";
  document.getElementById("shadow_side_bar").className = "shadow_side_bar_off";
}



function getData() {
  let userInfo = {
    name: document.getElementById("name").value,
    lastName: document.getElementById("lastname").value,
    birthDay: document.getElementById("day").value,
    birthMounth: document.getElementById("mounth").value,
    birthYear: document.getElementById("year").value,
    userMale: document.getElementById("male").value,
    userFemale: document.getElementById("female").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
    rules: document.querySelector("input[type=checkbox]"),
    gender: document.querySelector("input[type=radio]"),
    get getUser() {
      return `      
      Имя: ${this.name} 
      Фамилия: ${this.lastName} 
      Дата рождения: ${this.birthDay} . ${this.birthMounth} . ${this.birthYear} 
      Телефон: ${this.phoneNumber}
      Почта: ${this.email}
      Пол:${this.gender.checked ? this.userMale : this.userFemale}
      Согласие с правилами: ${this.rules.checked}`;
    },
  };
  console.log(userInfo.getUser);
  return false;
}
function checkForRules() {
  let rules = document.querySelector("input[type=checkbox]");
  if (rules.checked) {
    document.getElementById("button_send").className = "submit_button";
  } else {
    document.getElementById("button_send").className = "disableButton";
  }
}

function open_loyalty_program(){
  let loyaltyButton = $('#loyalty_programm');
  loyaltyButton.on('click',function(){
    $('#loyalty_block').removeClass('block_loyalty_off').addClass('block_loyalty')
    $('body').addClass('body_overflow')
  })
}

open_loyalty_program()

// function close_loyalty_program(){}

function open_model_food() {
  const imageArr = document.querySelectorAll(".food_info");
  imageArr.forEach((el) => {
    el.addEventListener("click", function () {
      let image_src = this.querySelector("img").src;
      let title = this.querySelector("span").innerHTML;
      document.getElementById("modal_title").innerHTML = title;
      document.querySelector(".modal_food_image").src = image_src;
      document.querySelector(".food_window_off").className = "food_window_on";
      document.getElementById("modal_shadow_window").className =
        "modal_shadow_window_on";

    });
  });
}
open_model_food();

function close_model_food() {
  document.getElementById("modal_shadow_window").className =
    "modal_shadow_window_off";
  document.getElementById("model_window").className = "food_window_off";
}
