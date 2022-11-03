import { isValidNum, randomNumber } from './lib/helpers.js';
import { createCup, emptyElement, showScreen } from './lib/ui.js';


let NumOfCups = 0;
/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Hversu lengi á að bíða þar til við birtum biðskjá eftir leik. */
const SHOW_WAITINGSCREEN_TIME = 1000;

/** Breyta sem heldur utan um stöðuna á leiknum okkar */
const state = {
  /** Fjöldi spilaðra leikja. */
  played: 0,

  /** Fjöldi unna leikja. */
  won: 0,

  /** Fjöldi stiga. */
  points: 0,

  /** Hvar boltinn er falinn, `null` ef ekki í leik. */
  currentCup: null,

  /** Fjöldi stiga sem eru í boði í núverandi leik. */
  currentPointsAvailable: 0,
};

// Afritum SVG sem er nákvæmlega eitt stykki af í DOM í byrjun
// getum notað það oft í leiknum með:
// element.appendChild(svg.cloneNode(true));
const svg = document.querySelector('svg').cloneNode(true);


// Setjum rétt gildi fyrir hámark í villuskilaboðum.
document.querySelector('#max_cups').innerText = MAX_NUM_OF_CUPS;

/**
 * Meðhöndlar það sem gerist þegar notandi velur bolla:
 * - Ef engin bolti er falinn, birtir biðskjá.
 * - Uppfærir fjölda leikja sem hafa verið spilaðir.
 * - Ef rétt gisk, sýnir boltann og gefur stig, annars sýnir tómt.
 * - Uppfærir fjölda stiga og leikja spilaða.
 * - Birtir biðjskjá eftir skilgreindann tíma þegar notandi er búinn að velja.
 *
 * @param {event} e Atburður sem átti sér stað þegar notandi ýtti á takka fyrir
 *                  ákveðinn bolla.
 * @returns 
 */
function onCupClick(e) {
    console.log(e.target.dataset.num);

    const bolliNum = e.target.dataset.num;

    const bolti = randomNumber(1, NumOfCups);

    console.log(bolti);

    if(bolliNum == bolti){
        const bolli = document.querySelectorAll('.cup');
        console.log(bolli)
        console.log('rétt');
        const cupSvg = bolli[bolliNum -1]
        const mynd = cupSvg.querySelectorAll('.cup__content')
        cupSvg.classList.remove('cup__content');
        console.log(mynd)
        
        

        
        
        
        


    }
    else{
        console.log('rangt')
        
    }
    
   



  // TODO útfæra
}

/**
 * Tæmir `parent` og býr til `num` bollum og setur þangað inn.
 * @param {number} num Fjöldi bolla
 * @param {element} parent Element sem á að setja bollana inn í.
 */
function createCups(num, parent) {
    emptyElement(parent)

    for (let i = 1; i <= num; i++) {
      const cup = createCup(i, svg, onCupClick);
      parent.appendChild(cup);
    }


    
  // TODO útfæra
}

/**
 * Meðhöndlar það að notandi byrjar leikinn með því að skrá fjölda bolla og ýta
 * á takkann eða ýta á enter.
 * Sér um að:
 * - Athuga hvort fjöldi bolla sé réttur, ef ekki sýna villuskilaboð.
 * - Búa til bolla.
 * - Uppfæra fjölda stiga sem eru í boði og undir hvaða bolla boltinn sé.
 * - Sýna bollaskjáinn.
 *
 * @param {event} e Atburður sem átti sér stað þegar form var sent.
 */
function onFormSubmit(e) {
  e.preventDefault();

  const input = e.target.querySelector('input');
  const value = input.value;
  NumOfCups = Number(value);

  const isValid = isValidNum(value,MIN_NUM_OF_CUPS, MAX_NUM_OF_CUPS);

  const formError = document.querySelector('.form__error');
  formError.classList.add('form__error--hidden');

  const valueAsNumber = Number.parseInt(value);

  


  if (isValid) {
    showScreen('main');
    createCups(valueAsNumber, document.querySelector('.cups'));
    state.currentCup = randomNumber(1, value);




  } else{
    formError.classList.remove('form__error--hidden');
  }

  

  

  

  

}

// Tengir event handler við formið.
document.querySelector('form').addEventListener('submit', onFormSubmit);