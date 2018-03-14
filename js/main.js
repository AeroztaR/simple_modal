'use strict';

let doc = document,
    modal = doc.getElementById('justModal'),
    modalBtn = doc.getElementById('modalBtn'),
    closeBtn = doc.querySelector('.closeBtn');

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'block';
};

closeBtn.addEventListener('click', closeModal);

function closeModal (){
    modal.style.display = 'none';
}

window.addEventListener('click', outsideCloseModal);

function outsideCloseModal(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}