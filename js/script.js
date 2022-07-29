const burger = document.querySelector(".burger");

function visualizarLista(){
    const lista = document.querySelector(".lista");
    const listaLi = document.querySelectorAll(".lista__li");

    lista.classList.toggle("lista--activada");
    burger.classList.toggle("toggle");
    listaLi.forEach((li, index) => li.style.transition = `all ${0.6*index + 0.6}s`);
}
burger.addEventListener("click", visualizarLista);