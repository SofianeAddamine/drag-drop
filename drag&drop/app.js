const base = document.querySelector('.base');
const box = document.querySelectorAll('.case');
const contenu = document.querySelector("#contentnote"); // selection
const envoyer = document.querySelector("#send");


base.addEventListener('dragstart', dragStart); 
base.addEventListener('dragend', dragEnd);  
     
    envoyer.addEventListener("click", function(){
        base.innerHTML = contenu.value;
    });

function dragStart() {
    this.className += ' tenu'; // donne l'éffet 
    setTimeout(() => (this.className = 'invisible'), 0); // rend l'élément invisible quand elle
}                                                        // est prise 

function dragEnd() {
    this.className = 'base'; // donne la classe "base"
}
 
for (const vide of box) { // Itération
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);
}

function dragOver(e) {  
    e.preventDefault() // enlever l'événement par défaut du dragover
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'case';
}

function dragDrop() {
    this.className = 'case';
    this.append(base);
}