/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns `true` ef tala er innan bils, annars `false`.
 */
 function isValidNum(numAsString, min, max) {
    if(isNaN(numAsString)){
        console.error(numAsString + " er ekki löglegt gildi")
        return false;
    }

    if (numAsString < min || numAsString > max){
        console.error(numAsString + " er ekki löglegt gildi")
        return false;
    }

    return true;
    /* TODO útfæra */
  }
  /* TODO útfæra */


/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
    getChoice = Number.parseInt(0, numOfCups)

  /* TODO útfæra */
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
/**
 * Spilum leik.
 */
function play() {
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`);
    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    }
    if(!isValidNum(numOfCups,2, 10 )){
        return;
    }  

    const getChoice = prompt("hvaða bolla af " + numOfCups + "?")
    if(numOfCups === null){
        return;
    }

    console.log(getChoice);


    bolli = (randomNumber(1,numOfCups));
    console.log(bolli);

    if(!isValidNum(getChoice,1, bolli )){
      return;
  } 

   

    if(getChoice == bolli){
        alert("Rétt, þú færð " + (numOfCups - 1) + " stig!")
        points = numOfCups;
        won = won + 1;
        played = won + 1;
        confirm("Spila aftur?")
        
    }
    else{
        alert("Rangt," + " boltin var í bolla " + bolli)
        played = played + 1;
        confirm("Spila aftur?")
       

    }


    
  /* TODO útfæra */
  } while (true){
    

  }
   
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  const total = won + played;
 if(total > 0){
    console.log("leikir spilaðir: " + total + " Unnir leikir: " + won + " Stig: " + points)
 }
}