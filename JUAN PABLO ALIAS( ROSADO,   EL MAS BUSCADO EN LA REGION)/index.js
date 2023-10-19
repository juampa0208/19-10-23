import { data } from "/data.js";

console.log(data);
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];
let Dislike = [];

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})

const loadData = data => {
    data.forEach(personaje  => {
        const {id, name, image} = personaje;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    // appendChild agrega un nodo al final de la lista
    items.appendChild(fragment);
}

items.addEventListener('click', e => {
    addLike(e);
})

const addLike = e => {
    console.log(e.target.classList.contains('btn-dark')); {
    setLike(e.target.parentElement);
    }
}


const setLike = objeto =>{
    const boton = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        cantidad: 0
    }

    if (like.hasOwnProperty(boton.id)){
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton};

    console.log(like[boton.id]);
}
