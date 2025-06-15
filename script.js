document.addEventListener("DOMContentLoaded", function() {
    // pega o botão
    const listImage = document.getElementById("list");
    // pega o menu
    const mobileMenu = document.getElementById("mobilemenu");
    //pega o botão da seta
    const topbotao = document.getElementById("topbutton");
    //pega o body
    const homerson = document.getElementById("home");
    
    // clica ai mano
    listImage.addEventListener("click", function() {
      // receba o gap
      mobileMenu.classList.toggle("translate-x-full");
      //deixa o botão com blur
      topbotao.classList.toggle("blur");
      //deixa o fundo sem scroll
      homerson.classList.toggle("overflow-hidden");
    })
});