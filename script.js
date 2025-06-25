document.addEventListener("DOMContentLoaded", function() {
    // pega o botão
    const listImage = document.getElementById("list");
    // pega o menu
    const mobileMenu = document.getElementById("mobilemenu");
    //pega o botão da seta
    const topbotao = document.getElementById("topbutton");
    //pega o body
    const homerson = document.getElementById("home");
    //pega o gênero GOTY
    const goty = document.getElementById("goty");
    //pega o resumo de GOTY
    const gotysum = document.getElementById("gotysum");
    //pega o grid do skul
    const skulgen = document.getElementById("skulgen");
    //pega o x do goty
    const closegoty = document.getElementById("closegoty");
    //pega o botão download do skul
    const downloadskul = document.getElementById("downloadskul");
    //pega a hr do skul
    const hrskul = document.getElementById("hrskul");

    // clica ai mano
    listImage.addEventListener("click", function() {
      
      // receba o gap
      mobileMenu.classList.toggle("translate-x-full");
      //deixa o botão com blur
      topbotao.classList.toggle("blur");
      //deixa o fundo sem scroll
      homerson.classList.toggle("overflow-hidden");
    });

    goty.addEventListener("click", function() {

      skulgen.classList.toggle("hidden");
      gotysum.classList.toggle("hidden");
      downloadskul.classList.toggle("hidden");
      gotysum.classList.toggle("z-50");
      gotysum.classList.toggle("absolute");
      hrskul.classList.toggle("hidden");

    });

    closegoty.addEventListener("click", function() {

      skulgen.classList.toggle("hidden");
      gotysum.classList.toggle("hidden");
      downloadskul.classList.toggle("hidden");
      gotysum.classList.toggle("z-50");
      gotysum.classList.toggle("absolute");
      hrskul.classList.toggle("hidden");

    });
});