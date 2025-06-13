document.addEventListener("DOMContentLoaded", function() {
    // pega o botão
    const listImage = document.getElementById("list");
    // pega o menu
    const mobileMenu = document.getElementById("mobilemenu");

    const topbotao = document.getElementById("topbutton");

    const homerson = document.getElementById("home")
    
    // clica ai mano
    listImage.addEventListener("click", function() {
      // receba o gap
      mobileMenu.classList.toggle("translate-x-full");

      topbotao.classList.toggle("hidden");

      homerson.classList.toggle("overflow-hidden");
    });
  });