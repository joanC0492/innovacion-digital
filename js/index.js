addEventListener("DOMContentLoaded", ()=>{

  let arrow = document.querySelectorAll("#preg-frecuentes .card-preg .fa-chevron-up");
  let card_preg = document.querySelectorAll("#preg-frecuentes .card-preg");
  let btn_menu = document.getElementById("btn-menu");
  let list_header = document.getElementById("list-header");
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click",()=>{
      card_preg[i].classList.toggle('active');
    });
  }
  btn_menu.addEventListener("click",()=>{
    list_header.classList.toggle("active");
  });

  new WOW().init();
  

});