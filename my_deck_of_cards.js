 
         

 



/****************************************************************************
takes ordered array of card objects switches one card at a time with another 
and "shuffles" cards array of objects on different cardObjectsArray.js. 
Called by button
****************************************************************************/

/*
function deckShuffle() {
    for (i = 0; i < 1; i++)
    for (j = 0; j < this.cards.length; j++) {
      k = Math.floor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
}
*/

var theLength = cards.length - 1;
    var toSwap;
    var tempCard;
 
    function deckShuffle() {
        
        document.getElementById('shuffle').disabled = true; 
        
        for (i = theLength; i > 0; i--) {
            toSwap = Math.floor(Math.random() * i);
            tempCard = cards[i];
            cards[i] = cards[toSwap];
            cards[toSwap] = tempCard;
        }
    
    }



/****************************************************************************
"deals" cards one to me, one to computer until all 52 are gone from cards[], 
leaving 26 cards in myHand[] and 26 in computerHand[].Called by button on 
index
****************************************************************************/

var myHand = [];
var computerHand = [];


function deal(){
    
    document.getElementById('deal').disabled = true; 

    for (i=0; i<26; i++){
        var myDealt = cards.shift();
        myHand.push(myDealt);
        var compDealt = cards.shift();
        computerHand.push(compDealt);
        document.getElementById('pstack').innerHTML = '<div class="card" style="left:24em;top:2em;"></div>';
        document.getElementById('cstack').innerHTML = '<div class="card" style="left:24em;top:12em;"></div>';            
    }
}

/****************************************************************************
assigns variable values to html required to place cards in correct place on 
screen. 
****************************************************************************/

//players dealt cards, p1, p2, p3, p4, p5

var p0 = '<div class="card" style="left:2em;top:12em;">'
var p1 = '<div class="card" style="left:6em;top:12em;">'
var p2 = '<div class="card" style="left:10em;top:12em;">'   
var p3 = '<div class="card" style="left:14em;top:12em;">'
var p4 = '<div class="card" style="left:18em;top:12em;">'

//computers flipped cards, c1, c2, c3, c4, c5

var c0 = '<div class="card" style="left:2em;top:2em;">'
var c1 = '<div class="card" style="left:6em;top:2em;">'
var c2 = '<div class="card" style="left:10em;top:2em;">'   
var c3 = '<div class="card" style="left:14em;top:2em;">'
var c4 = '<div class="card" style="left:18em;top:2em;">'

/****************************************************************************
assigning variables required for card turning and gameplay
****************************************************************************/

//cards 'turned' from respective stack. These are to be removed from respective hands

var myTurnedCards = [];
var compTurnedCards = [];

//cards turned, brought into a new stack. will include all cards turned. array to be built and removedeach round as someone wins cards

var battleCards = [];

//cards that have been won each round. comprised of both parties' battle cards. should be face down

var myCapturedCards = [];
var compCapturedCards = [];
var myCardValue;
var compCardValue;

/****************************************************************************
flipping cards, 1 from computer, 1 from player. If cards flipped have same value, 3 cards are burnt and 4th card's value braks tie. Repeat as needed.
****************************************************************************/

 
function flipCards(){ 
    
    
    
    
    console.log('myHand');
    console.log( myHand.length);
    console.log('my cap cards');
    console.log(myCapturedCards.length);
    console.log('comp hand');
    console.log(computerHand.length);
    console.log('computer cap cards')
    console.log(compCapturedCards.length);
                
    //myTurnedCars is the top card of myHand
    myTurnedCards = myHand.pop();
    // value of that card
    myCardValue = myTurnedCards.value;
    
    
    compTurnedCards = computerHand.pop();
    compCardValue = compTurnedCards.value;
    
    
    document.getElementById('p0').innerHTML = p0 + myTurnedCards.html;   
    document.getElementById('c0').innerHTML = c0 + compTurnedCards.html;
       
         
    
    if (myCardValue !== compCardValue){ 
        regularPlay();
        document.getElementById('p1').innerHTML = null;
        document.getElementById('c1').innerHTML = null;
        document.getElementById('p2').innerHTML = null;   
        document.getElementById('c2').innerHTML = null;
        document.getElementById('p3').innerHTML = null;   
        document.getElementById('c3').innerHTML = null;
        document.getElementById('p4').innerHTML = null;   
        document.getElementById('c4').innerHTML = null;
        
        
        
    }else{
        warPlay();
    }
}
    
function regularPlay(){
        battleCards.push(myTurnedCards);
        battleCards.push(compTurnedCards);
        
        
            
if  ( myTurnedCards.value > compTurnedCards.value ) {
        
        for (i=0; i<= battleCards.length; i++){
        var capturedCard = battleCards.pop();
        myCapturedCards.push(capturedCard);
        
         }
        
}else {
        for (i=0; i<= battleCards.length; i++){
        var capturedCard = battleCards.pop();
        compCapturedCards.push(capturedCard);
            
        }
    }
}

    
function warPlay(){
      
        myTurnedCards = myHand.pop();
        compTurnedCards = computerHand.pop();
        myCardValue = myTurnedCards.value;
        compCardValue = compTurnedCards.value;
        document.getElementById('p1').innerHTML = p1 + myTurnedCards.html;
        document.getElementById('c1').innerHTML = c1 + compTurnedCards.html;
        battleCards.push(myTurnedCards);
        battleCards.push(compTurnedCards);
                
        myTurnedCards = myHand.pop();
        compTurnedCards = computerHand.pop();
        myCardValue = myTurnedCards.value;
        compCardValue = compTurnedCards.value;
        document.getElementById('p2').innerHTML = p2 + myTurnedCards.html;
        document.getElementById('c2').innerHTML = c2 + compTurnedCards.html;
        battleCards.push(myTurnedCards);
        battleCards.push(compTurnedCards);
                
        myTurnedCards = myHand.pop();
        compTurnedCards = computerHand.pop();
        myCardValue = myTurnedCards.value;
        compCardValue = compTurnedCards.value;
        document.getElementById('p3').innerHTML = p3 + myTurnedCards.html;
        document.getElementById('c3').innerHTML = c3 + compTurnedCards.html;
        battleCards.push(myTurnedCards);
        battleCards.push(compTurnedCards);
        
        myTurnedCards = myHand.pop();
        compTurnedCards = computerHand.pop();
        myCardValue = myTurnedCards.value;
        compCardValue = compTurnedCards.value;
        document.getElementById('p4').innerHTML = p4 + myTurnedCards.html;
        document.getElementById('c4').innerHTML = c4 + compTurnedCards.html;
        battleCards.push(myTurnedCards);
        battleCards.push(compTurnedCards);
        
                if  ( myTurnedCards.value > compTurnedCards.value ) {
        
                    for (i=0; i<= battleCards.length; i++){
                    var capturedCard = battleCards.pop();
                    myCapturedCards.push(capturedCard);
                        console.log('youwon the war');
                    }
     
        
                }else if (myTurnedCards.value < compTurnedCards.value) {
                    
                    for (i=0; i<= battleCards.length; i++){
                    var capturedCard = battleCards.pop();
                    compCapturedCards.push(capturedCard);
                        console.log('computer won the war');
                    } 
                    
        
            
                }else {
                        warPlay();
                }
    }
    
  
 
 
 
  
 


 
 
