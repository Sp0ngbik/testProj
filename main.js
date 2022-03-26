function owlConfig() {
  //Owl Carousel
  let owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: false,
    dots: true,
    dotsContainer: $("#custom_owl_dots"),
  });
  $("#custom_owl_dots").on("click", "a", function () {
    owl.trigger("to.owl.carousel", [$(this).index(), 300]);
  });
}

owlConfig();

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

function mapAddressSwitcher() {
  $(".adress").addClass("activeSwitch");
  $(".first_block a").not(".adress-filter").hide();
  $(".adress_map div").on("click", function (e) {
    $(".adress_map div").removeClass("activeSwitch");
    $(e.target).addClass("activeSwitch");
    let filterValue = $(e.target).attr("data-adress-map-filter");
    $(".first_block a")
      .filter("." + filterValue)
      .show();
    $(".first_block a")
      .not("." + filterValue)
      .hide();
    if (filterValue == "map-filter") {
      $(".first_block")
        .removeClass("our_adress_and_food")
        .addClass("map_block");
    } else {
      $(".first_block")
        .removeClass("map_block")
        .addClass("our_adress_and_food");
    }
  });
}
mapAddressSwitcher();

function scrollToBlock() {
  let links_block = $("#mySidebar a");
  links_block.on("click", function (e) {
    let positionBlock = $(e.target).attr("href");
    if ($(positionBlock).length) {
      let toTop = $(positionBlock).offset().top;
      closeNav();
      $("body, html").animate({ scrollTop: toTop }, 800);
    }
  });
}
scrollToBlock();

function desertSelector() {
  let item = $(".food_info");
  let firstChildAttr = $(".food_nav_bar div:first-child").attr("data-filter");
  $(item).not(".desert_filter").hide();
  $(item).filter(".desert_filter").hide();
  let slicerBeforeClick = $(item).filter($("." + firstChildAttr));
  slicerBeforeClick.slice(0, 3).show();
  $(".deserts").addClass("food_nav_bar_active");
  $(".food_nav_bar").on("click", function (e) {
    let checkValue = $(e.target).attr("data-filter");
    let rightFilter = $(item).filter("." + checkValue);
    let slicer = rightFilter.slice(0, 3);
    $(slicer)
      .filter("." + checkValue)
      .show();
    $(item)
      .not("." + checkValue)
      .hide();
    $(".food_more_button").attr("data-filter", checkValue);
    $(".food_nav_bar div").removeClass("food_nav_bar_active");
    $(e.target).addClass("food_nav_bar_active");
  });
}
$(".food_more_button").on("click", function () {
  let dataAttribute = $(".food_more_button").attr("data-filter");
  $(".food_info")
    .filter("." + dataAttribute)
    .show();
  $(".food_info")
    .not("." + dataAttribute)
    .hide();
});

desertSelector();

function openNav() {
  document.getElementById("mySidebar").className = "sidebarActive";
  document.getElementById("shadow_side_bar").className =
    "shadow_side_bar_active";
  if ($(window).width() <= "560") {
    $("openbtn_image").attr("data-change-img", "times-img");
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

  // console.log(userInfo.getUser);
  return false;
}
function checkForRules() {
  let rules = document.querySelector("input[type=checkbox]");
  if (rules.checked) {
    $("#button_send").addClass("submit_button");
    $("#button_send").removeClass("disableButton");
  } else {
    $("#button_send").addClass("disableButton");
    $("#button_send").removeClass("submit_button");
  }
}

function open_loyalty_program() {
  let loyaltyButton = $("#loyalty_programm");
  loyaltyButton.on("click", function () {
    $("#loyalty_block")
      .removeClass("block_loyalty_off")
      .addClass("block_loyalty");
    $("body").addClass("body_overflow");
    $("#loyalty_shadow_window")
      .removeClass("loyalty_shadow_window_off")
      .addClass("loyalty_shadow_window_on");
    $(".upper_block").addClass("upper_block_unfix");
  });
}

open_loyalty_program();

function close_loyalty_program() {
  $("#loyalty_shadow_window").on("click", function () {
    $("#loyalty_block")
      .removeClass("block_loyalty")
      .addClass("block_loyalty_off");
    $("body").removeClass("body_overflow");

    $("#loyalty_shadow_window")
      .removeClass("loyalty_shadow_window_on")
      .addClass("loyalty_shadow_window_off");
    $(".upper_block").removeClass("upper_block_unfix");
  });
  $(".loyalty_times").on("click", function () {
    $(".upper_block").removeClass("upper_block_unfix");
    $("#loyalty_shadow_window");
    $("#loyalty_block")
      .removeClass("block_loyalty")
      .addClass("block_loyalty_off");
    $("body").removeClass("body_overflow");
  });
}

close_loyalty_program();

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
function user_table_info() {
  $("#button_send").on("click", function () {
    $("#form_add_user")
      .addClass("form_container_off")
      .removeClass("form_container_on");
    $("#form_create_shadow")
      .removeClass("form_create_shadow_on")
      .addClass("form_create_shadow_off");

    let userGenderee;
    if ($(".radioButton#male[type=radio]").is(":checked")) {
      userGenderee = "Мужчина";
    } else if ($(".radioButton#female[type=radio]").is(":checked")) {
      userGenderee = "Женщина";
    } else {
      userGenderee = "Пол не указан";
    }
    let day_birth = $(".day_input");
    let mounth_birth = $(".mounth_input");
    let year_birth = $("#year");
    let user_table = $(".users_table");
    let cell = $(`<tr class="user_cell"></tr>`);
    let username = $(`<td class="username_cell"></td>`).text(
      `${$(".username").val()}`
    );
    let lastName = $(`<td class="lastname_cell"></td>`).text(
      `${$(".lastName").val()}`
    );
    let userGender = $(`<td class="gender_cell"></td>`).text(`${userGenderee}`);
    let userBirth = $(`<td class="birthday_cell"></td>`).text(
      `${$(day_birth).val()}.${$(mounth_birth).val()}.${$(year_birth).val()}`
    );
    let userPhone = $(`<td class="phonenumber_cell"></td>`).text(
      `${$(".phoneNumber").val()}`
    );
    let userCard = $(`<td class="place_cell"></td>`).text(
      `${$(".place").val()}`
    );
    let userMail = $(`<td class="email_cell"></td>`).text(
      `${$(".email").val()}`
    );

    let buttonEdit = $(
      `<td><button class="user_info_edit" >
      Редактировать</button></td>`
    );
    cell.append(
      username,
      lastName,
      userGender,
      userBirth,
      userPhone,
      userCard,
      userMail,
      buttonEdit
    );
    user_table.append(cell);
    $(".user_info_edit").on("click", function (e) {
      $("#edit_form").addClass("edit_modal_on").removeClass("edit_modal_off");
      $("#form_create_shadow")
        .addClass("form_create_shadow_on")
        .removeClass("form_create_shadow_off");
      let block = $(e.currentTarget).parent().parent();
      let blockArr = $(block).find("td");
      let birthArr = $(blockArr[3]).text().split(".");
      $(".username_edit").val($(blockArr[0]).text());
      $(".lastName_edit").val($(blockArr[1]).text());
      $(".day_input_edit").val(birthArr[0]);
      $(".mounth_input_edit").val(birthArr[1]);
      $(".year_input_edit").val(birthArr[2]);
      $(".phoneNumber_edit").val($(blockArr[4]).text());
      $(".email_edit").val($(blockArr[6]).text());
      if ($(blockArr[2]).text() === "Мужчина") {
        $(".radio_edit#male").prop("checked", true);
      } else if ($(blockArr[2]).text() === "Женщина") {
        $(".radio_edit#female").prop("checked", true);
      }
      $(".place_edit").val($(blockArr[5]).text());

      $(".save_edits_button").on("click", function () {
        $("#form_create_shadow")
          .addClass("form_create_shadow_off")
          .removeClass("form_create_shadow_on");
        $("#edit_form").addClass("edit_modal_off").removeClass("edit_modal_on");

        $(block).find(".username_cell").text($(".username_edit").val());
        $(block).find(".lastname_cell").text($(".lastName_edit").val());
        $(block).find(".phonenumber_cell").text($(".phoneNumber_edit").val());
        $(block).find(".email_cell").text($(".email_edit").val());
        $(block)
          .find(".birthday_cell")
          .text(
            `${$(".day_input_edit").val()}.${$(".mounth_input_edit").val()}.${$(
              ".year_input_edit"
            ).val()}`
          );
        $(block).find(".place_cell").text($(".place_edit").val());
        console.log($(".radio_edit#male[type=radio]").is(":checked"));
        if ($(".radio_edit#male[type=radio]").is(":checked")) {
          $(block).find(".gender_cell").text("Мужчина");
        } else if ($(".radio_edit#female[type=radio]").is(":checked")) {
          $(block).find(".gender_cell").text("Женщина");
        } else {
          $(block).find(".gender_cell").text("Пол не указан");
        }
        block = 0;
      });
      $("#form_create_shadow").on("click", function () {
        block = 0;

        $("#form_create_shadow")
          .removeClass("form_create_shadow_on")
          .addClass("form_create_shadow_off");
        $("#edit_form").addClass("edit_modal_off").removeClass("edit_modal_on");
        $(".username").val("");
        $(".lastName").val("");
        $(".radioButton#male").prop("checked", false);
        $(".radioButton#female").prop("checked", false);
        $(".day_input").val("day");
        $(".mounth_input").val("mounth");
        $(".year_input").val("year");
        $(".phoneNumber").val("");
        $(".place").val("Карбышева");
        $(".email").val("");
        $(".rules_checkbox").prop("checked", false);
        $(".usernme_edit").val("");
        $(".lastName_edit").val("");
        $(".radio_edit#male").prop("checked", false);
        $(".radio_edit#female").prop("checked", false);
        $(".day_input_edit").val("day");
        $(".mounth_input_edit").val("mounth");
        $(".year_input_edit").val("year");
        $(".phoneNumber_edit").val("");
        $(".email_edit").val("");
        $(".place_edit").val("Карбышева");
      });
    });
    $(".username").val("");
    $(".lastName").val("");
    $(".radioButton#male").prop("checked", false);
    $(".radioButton#female").prop("checked", false);
    $(".day_input").val("day");
    $(".mounth_input").val("mounth");
    $(".year_input").val("year");
    $(".phoneNumber").val("");
    $(".place").val("Карбышева");
    $(".email").val("");
    $(".rules_checkbox").prop("checked", false);
  });
}

user_table_info();

function addUserForm() {
  $(".add_user_button").on("click", function (e) {
    $("#form_create_shadow").on("click", function () {
      $("#form_add_user")
        .removeClass("form_container_on")
        .addClass("form_container_off");
      $("#form_create_shadow")
        .addClass("form_create_shadow_off")
        .removeClass("form_create_shadow_on");
    });
    $("#form_add_user")
      .removeClass("form_container_off")
      .addClass("form_container_on");
    $("#form_create_shadow")
      .addClass("form_create_shadow_on")
      .removeClass("form_create_shadow_off");
  });
}

addUserForm();
