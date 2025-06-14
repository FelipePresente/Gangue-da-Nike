document.addEventListener("DOMContentLoaded", function() {
    // pega o botão
    const listImage = document.getElementById("list");
    // pega o menu
    const mobileMenu = document.getElementById("mobilemenu");

    const topbotao = document.getElementById("topbutton");

    const homerson = document.getElementById("home");

    const balatro = document.getElementById("itembalatro");

    const pop = document.getElementById("pop1");
    
    // clica ai mano
    listImage.addEventListener("click", function() {
      // receba o gap
      mobileMenu.classList.toggle("translate-x-full");
      //deixa o botão com blur
      topbotao.classList.toggle("blur");
      //deixa o fundo sem scroll
      homerson.classList.toggle("overflow-hidden");
    });

    balatro.addEventListener("click", function() {

    pop.classList.toggle("hidden")

    });

  });