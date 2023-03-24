/* 
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

*/

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'solid',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'solid',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'solid',
        color: 'blue'
    }
];


const selectMenu = document.getElementById('typeSelect');
selectMenu.addEventListener('change', selectType);

function drawCard(element){
    let cardBox = document.createElement('div');
    cardBox.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-column', 'rounded-3', 'col-lg-2', 'col-md-4', 'col-sm-12','bg-white', 'm-3');

    let cardSmallBox = document.createElement('div');
    cardSmallBox.classList.add('py-3', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-column');
    

    let cardIcon = document.createElement('i');
    cardIcon.classList.add(`${element.prefix + element.family}`,`${element.prefix + element.name}`, 'fs-3', `${element.color}`);
    
    let cardName = document.createElement('p');
    cardName.classList.add('text-uppercase');
    cardName.innerHTML = `<strong>${element.name}</strong>`;
    
    cardSmallBox.append(cardIcon,cardName);
    cardBox.append(cardSmallBox);

    return cardBox;
}

let cards = [];


function init(){
    const iconsContainer = document.querySelector('.icons-container');
    for (let i = 0; i < icons.length; i++){
        const template = drawCard(icons[i]);

        iconsContainer.append(template);
        cards.push(template);
    }
    
}


function selectType(){
    selectedValue = selectMenu.value;
    for(let i = 0; i< icons.length; i++){
        if (icons[i].type != selectedValue && selectedValue != "all"){
            cards[i].classList.add('d-none');
        }else{
            cards[i].classList.remove('d-none');
        }
    }
}


init();


/* <div class="icon-box     ">
        <div class="    ">
            <i class=" fs-3"></i>
        <p class="text-uppercase fs-3"></p>
        </div>
    </div>
    */
