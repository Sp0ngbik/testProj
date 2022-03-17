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
  $('#custom_owl_dots').change(function(){
  })
 console.log($('.owl-dot.active').text())
}
owlConfig()
function mainSlideSelect() {
  let slider = $("#main_slide");
  let nav_links = $("*#test");
  let mobile_version_title = $("#mob_ver_title");
  nav_links.on("click", function (e) {
    slider.attr("src", $(e.target).attr("data-src"));
    mobile_version_title.text($(e.target).text());
  });
}
mainSlideSelect();

function desertSelector(){
  let item = $('.food_info');
  $(item).not('.desert_filter').hide();
  $(item).filter('.desert_filter').show();
  $('.deserts').addClass('food_nav_bar_active')
  $('.food_nav_bar').on('click', function(e){
  $('.food_nav_bar div').removeClass('food_nav_bar_active');
  $(e.target).addClass('food_nav_bar_active')
  let checkValue = $(e.target).attr("data-filter");
  $(item).not('.'+checkValue).hide();
  $(item).filter('.'+checkValue).show();
  }
)
$('.food_more_button').on('click',function(e){
  $(item).show();
})
}
desertSelector();



function openNav() {
  document.getElementById("mySidebar").className = "sidebarActive";
  document.getElementById("shadow_side_bar").className =
    "shadow_side_bar_active";
     $('.header_nav').addClass('header_nav_fixed');
     $('.select_country').addClass('select_country_fixed');
     $('.logo').addClass('logo_fixed');
}

function closeNav() {
  document.getElementById("mySidebar").className = "sidebarOff";
  document.getElementById("shadow_side_bar").className = "shadow_side_bar_off";
  $('.header_nav').removeClass('header_nav_fixed');
  $('.select_country').removeClass('select_country_fixed');
  $('.logo').removeClass('logo_fixed');
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
