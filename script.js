document.addEventListener("DOMContentLoaded", function() {
    // pega o botão
    const listImage = document.getElementById("list");
    // pega o menu
    const mobileMenu = document.getElementById("mobilemenu");
    //pega o botão da seta
    const topbotao = document.getElementById("topbutton");
    //pega o body
    const homerson = document.getElementById("home");

    const moon = document.getElementById("moon");

    const moondropdown = document.getElementById("moondropdown");

    const sobre = document.getElementById("sobre");

    const sobredropdown = document.getElementById("sobredropdown");

    const creditos = document.getElementById("creditos");

    const creditosdropdown = document.getElementById("creditosdropdown");
    
    // clica ai mano
    listImage.addEventListener("click", function() {
      // receba o gap
      mobileMenu.classList.toggle("translate-x-full");
      //deixa o botão com blur
      topbotao.classList.toggle("blur");
      //deixa o fundo sem scroll
      homerson.classList.toggle("overflow-hidden");
    })

    moon.addEventListener("mouseenter", function() {

      moondropdown.classList.toggle("hidden");
      creditosdropdown.classList.add("hidden");
      sobredropdown.classList.add("hidden");

    })

    moon.addEventListener("mouseleave", function() {

      moondropdown.classList.toggle("hidden");

    })

    creditos.addEventListener("mouseenter", function() {

      creditosdropdown.classList.toggle("hidden");
      moondropdown.classList.add("hidden");
      sobredropdown.classList.add("hidden");

    })

    creditos.addEventListener("mouseleave", function() {

      creditosdropdown.classList.toggle("hidden");

    })

  sobre.addEventListener("mouseenter", function() {

      sobredropdown.classList.toggle("hidden");
      moondropdown.classList.add("hidden");
      creditosdropdown.classList.add("hidden");

    })

    sobre.addEventListener("mouseleave", function() {

      sobredropdown.classList.toggle("hidden");

    })  
});