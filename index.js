document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}


const cards = document.querySelectorAll('.card'); //seleccionamos todas las clases card

//recorremos todas las card
cards.forEach( card => {
  //asignamos un evento click
  card.addEventListener('click', () => {
    removeActiveClass(); //removemos la clase anterior para que asi otra card pueda expandirse

    //añadimos la clase active lo que permite expandir a esa card
    card.classList.add('active');
  });
});

//funcion que permite remover la clase active de una card
function removeActiveClass() {
  cards.forEach( card => card.classList.remove('active'));
}