function openNav() {
  document.getElementById("mySidebar").className='sidebarActive';
  document.getElementById("shadow_side_bar").className = "shadow_side_bar_active";
  
  // document.getElementById("mySidebar").style.width = "100%";
  // document.getElementById("shadow_side_bar").style.opacity = "50%";
  // document.getElementById("shadow_side_bar").style.zIndex = "2";
}

function closeNav() {
  document.getElementById("mySidebar").className = "sidebarOff";
  document.getElementById("shadow_side_bar").className = "shadow_side_bar_off";

  // document.getElementById("shadow_side_bar").style.opacity = "0%";  
  // document.getElementById("shadow_side_bar").style.zIndex = "-1";
}
