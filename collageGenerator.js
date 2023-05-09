/* 

COLLAGE GENERATOR
by Olivia Hatcher

20/FA-DDA-252-01
Interactive Studio I Midterm 

October 2020
*/




//VARIABLES
var peoplePics = [];
var funOverlayPics = [];
var natureOverlayPics = [];
var thingPics = [];
var placePics = [];
var naturePics = [];
var backgroundPics = [];



let submitButton, resetButton, saveButton;
let input, inputLength,wordVal;
let eachLetter,letterXVal,letterYVal;
let font1, font2;

//
//
//
//
//
//
//
//

function preload(){
  
//LOADING FONTS
font1 = loadFont('Users/oliviahatcher/Documents/GitHub/ohatcher.github.io/Fonts/COMICATE.TTF');
font2 = loadFont('Fonts/shoplift.ttf');
  
  
//LOADING BACKGROUND IMAGES
  for(let i=0; i<5; i++){
    backgroundPics[i] =
    loadImage('Backgrounds/background'+i+'.png'); 
  }
  
//LOADING EACH LETTER
    letterA = loadImage('Letters/letterA.png');
    letterB = loadImage('Letters/letterB.png');
    letterC = loadImage('Letters/letterC.png');
    letterD = loadImage('Letters/letterD.png');
    letterE = loadImage('Letters/letterE.png');
    letterF = loadImage('Letters/letterF.png');
    letterG = loadImage('Letters/letterG.png');
    letterH = loadImage('Letters/letterH.png');
    letterI = loadImage('Letters/letterI.png');
    letterJ = loadImage('Letters/letterJ.png');
    letterK = loadImage('Letters/letterK.png');
    letterL = loadImage('Letters/letterL.png');
    letterM = loadImage('Letters/letterM.png');
    letterN = loadImage('Letters/letterN.png');
    letterO = loadImage('Letters/letterO.png');
    letterP = loadImage('Letters/letterP.png');
    letterQ = loadImage('Letters/letterQ.png');
    letterR = loadImage('Letters/letterR.png');
    letterS = loadImage('Letters/letterS.png');
    letterT = loadImage('Letters/letterT.png');
    letterU = loadImage('Letters/letterU.png');
    letterV = loadImage('Letters/letterV.png');
    letterW = loadImage('Letters/letterW.png');
    letterX = loadImage('Letters/letterX.png');
    letterY = loadImage('Letters/letterY.png');
    letterZ = loadImage('Letters/letterZ.png');

//LOADING 'FUN OVERLAY' IMAGES
  for(let i=0; i<27; i++){
    funOverlayPics[i] =
    loadImage('Overlays/funOverlays/funOverlay'+i+'.png'); 
  }

//LOADING 'NATURE OVERLAY' IMAGES
  for(let i=0; i<19; i++){
    natureOverlayPics[i] =
    loadImage('Overlays/natureOverlays/natureOverlay'+i+'.png'); 
  }
  
//LOADING 'TEXTURE' IMAGES
  for(let i=0; i<25; i++){
    thingPics[i] =
    loadImage('Thing/thing'+i+'.png'); 
  }

//LOADING 'NATURE' IMAGES
  for(let i=0; i<27; i++){
    naturePics[i] =
    loadImage('Nature/nature'+i+'.png'); 
  }
  
//LOADING 'PEOPLE' IMAGES
  for(let i=0; i<40; i++){
    peoplePics[i] =
    loadImage('People/people'+i+'.png'); 
  }
  
//LOADING 'PLACE' IMAGES
  for(let i=0; i<28; i++){
    placePics[i] =
    loadImage('Place/place'+i+'.png'); 
  }

}

//
//
//
//
//
//
//
//
//
//
//

function getInput(){
  
  clear();
  
  saveButton.hide();
  resetButton.hide();

  
//CREATING TEXT BOX (INPUT) & SUBMIT BUTTON:

  //INPUT BOX
  input = createInput();
  input.style('border','none');
  input.style('font-size', '12px');
  input.style('padding','5px 10px');

  
  //SUBMIT BUTTON
  submitButton = createButton('submit');
  submitButton.style('background-color', '#D8B4A0');
  submitButton.style('border','none');
  submitButton.style('font-size', '12px');
  submitButton.style('color','#D77A61');
  submitButton.style('padding','5px 10px');
  
  input.position((windowWidth/2)-
                 (input.width+submitButton.width)/2,
                 windowHeight*0.5);
  
  submitButton.position(input.x+input.width,input.y);
  submitButton.mousePressed(generateCollage);
  

  background(219, 211, 216); 
  
  textFont(font2);
  textAlign(CENTER);
  textSize(30);
  fill(34, 56, 67);
  text('enter a word:',(windowWidth*0.5),windowHeight*0.47);
  
  textSize(80);
  fill(215, 122, 97);
  text("CoLLAGE GENERATOR!",windowWidth*0.5,windowHeight*0.30);
  
}

//
//
//
//
//
//
//
//

function setup() {

  createCanvas(windowWidth, windowHeight);
  
  //RESET BUTTON
    resetButton = createButton('reset');
    resetButton.position(20,20);
    resetButton.style('float','left');
    resetButton.style('background-color','#DBD3D8');
    resetButton.style('color','#D77A61');
    resetButton.style('font-size','20px');
    resetButton.style('border','none');
    resetButton.style('text-align','left');
    resetButton.mousePressed(getInput);
    resetButton.style('padding','5px 10px');
  
  
  //SAVE BUTTON
    saveButton = createButton('save');
    saveButton.style('border','none');
    saveButton.style('float','left');
    saveButton.style('background-color','#D8B4A0');
    saveButton.style('color','#223843');
    saveButton.style('font-size','20px');
    saveButton.style('text-align','left');
    saveButton.style('padding','5px 10px');
    saveButton.position(100,20);
    saveButton.mousePressed(saveCollage);

  
  getInput();  
  
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* FUNCTION GENERATES A RANDOM COLLAGE BASED ON ASCII VALUE OF 
LETTERS IN THE USER INPUT */

function generateCollage() {
  submitButton.hide();
  input.hide();
  
  background(255);
  
  letterXVal = windowWidth*0.25;
  letterYVal = windowHeight*0.35
  
  wordVal = 0;
  
  resetButton.show();
  saveButton.show();

  
  background(backgroundPics
             [int(random(backgroundPics.length))]);
  
  
  eachLetter=split(input.value(),'');

  
//FOR LOOP TO DETERMINE TOTAL ASCII VALUE OF INPUT
  for( let i=0; i<eachLetter.length; i++){
    wordVal+=unchar(eachLetter[i]);
    //console.log('Word val='+wordVal);
  }
  
//PLACE A RANDOM THING ONCE FOR EVERY 50 POINTS IN WORD'S VALUE 
for(let i=0; i<wordVal; i+=50){
    image(thingPics[int(random(thingPics.length))],
          random(windowWidth),
          random(windowHeight)); 
    }
  
//PLACE A RANDOM PERSON ONCE FOR EVERY 25 POINTS IN WORD'S VALUE 
for(let i=0; i<wordVal; i+=25){
    image(peoplePics[int(random(peoplePics.length))],
          random(windowWidth),
          random(windowHeight)); 
    }
  
//PLACE A RANDOM NATURE ONCE FOR EVERY 30 POINTS IN WORD'S VALUE 
for(let i=0; i<wordVal; i+=30){
    image(naturePics[int(random(naturePics.length))],
          random(windowWidth),
          random(windowHeight)); 
    }
  
//PLACE A RANDOM PLACE ONCE FOR EVERY 75 POINTS IN WORD'S VALUE 
for(let i=0; i<wordVal; i+=75){
    image(placePics[int(random(placePics.length))],
          random(windowWidth),
          random(windowHeight)); 
    }
  
  
//IF THE WORD'S VALUE IS EVEN, PLACE 3-6 OF THE FUN OVERLAYS
//IF THE WORD'S VALUE IS ODD, PLACE 3-6 OF THE NATURE OVERLAYS
  if(wordVal%2==0){
    for(let i=0; i<(random(3,6)); i++){
      image(funOverlayPics[int(random(funOverlayPics.length))],
            random(windowWidth),
            random(windowHeight));
    }
  }
  else {
    for(let i=0; i<(random(3,6)); i++){
      image(natureOverlayPics
            [int(random(natureOverlayPics.length))],
            random(windowWidth),
            random(windowHeight));
    }
  }
  
//PLACING LETTERS TO FORM THE WORD (OVERLAPS ALL OTHER IMAGES) 
  for( let i=0; i<eachLetter.length; i++){
    eachLetter[i]=unchar(eachLetter[i]);
    if ((64<eachLetter[i] && eachLetter[i]<91) || 
        (96<eachLetter[i] && eachLetter[i]<123) ||     
        (eachLetter[i]==32)){
      //SPACE
      if(eachLetter[i]==32){
        letterXVal+= 70;
      }
      //A
      if((eachLetter[i]==65) || (eachLetter[i]==97)){
        image(letterA,letterXVal,letterYVal);
      }
      //B
      if((eachLetter[i]==66) || (eachLetter[i]==98)){
        image(letterB,letterXVal,letterYVal);
      }
      //C
      if((eachLetter[i]==67) || (eachLetter[i]==99)){
        image(letterC,letterXVal,letterYVal);
      }
      //D
      if((eachLetter[i]==68) || (eachLetter[i]==100)){
        image(letterD,letterXVal,letterYVal);
      }
      //E
      if((eachLetter[i]==69) || (eachLetter[i]==101)){
        image(letterE,letterXVal,letterYVal);
      }
      //F
      if((eachLetter[i]==70) || (eachLetter[i]==102)){
        image(letterF,letterXVal,letterYVal);
      }
      //G
      if((eachLetter[i]==71) || (eachLetter[i]==103)){
        image(letterG,letterXVal,letterYVal);
      }
      //H
      if((eachLetter[i]==72) || (eachLetter[i]==104)){
        image(letterH,letterXVal,letterYVal);
      } 
      //I
      if((eachLetter[i]==73) || (eachLetter[i]==105)){
        image(letterI,letterXVal,letterYVal);
      }
      //J
     if((eachLetter[i]==74) || (eachLetter[i]==106)){
        image(letterJ,letterXVal,letterYVal);
      } 
      //K
      if((eachLetter[i]==75) || (eachLetter[i]==107)){
        image(letterK,letterXVal,letterYVal);
      }
      //L
     if((eachLetter[i]==76) || (eachLetter[i]==108)){
        image(letterL,letterXVal,letterYVal);
      } 
      //M
      if((eachLetter[i]==77) || (eachLetter[i]==109)){
        image(letterM,letterXVal,letterYVal);
      }
      //N
      if((eachLetter[i]==78) || (eachLetter[i]==110)){
        image(letterN,letterXVal,letterYVal);
      }
      //O
      if((eachLetter[i]==79) || (eachLetter[i]==111)){
        image(letterO,letterXVal,letterYVal);
      }
      //P
      if((eachLetter[i]==80) || (eachLetter[i]==112)){
        image(letterP,letterXVal,letterYVal);
      }
      //Q
      if((eachLetter[i]==81) || (eachLetter[i]==113)){
        image(letterQ,letterXVal,letterYVal);
      }
      //R
      if((eachLetter[i]==82) || (eachLetter[i]==114)){
        image(letterR,letterXVal,letterYVal);
      }
      //S
      if((eachLetter[i]==83) || (eachLetter[i]==115)){
        image(letterS,letterXVal,letterYVal);
      }
      //T
      if((eachLetter[i]==84) || (eachLetter[i]==116)){
        image(letterT,letterXVal,letterYVal);
      }
      //U
      if((eachLetter[i]==85) || (eachLetter[i]==117)){
        image(letterU,letterXVal,letterYVal);
      }
      //V
      if((eachLetter[i]==86) || (eachLetter[i]==118)){
        image(letterV,letterXVal,letterYVal);
      }
      //W
      if((eachLetter[i]==87) || (eachLetter[i]==119)){
        image(letterW,letterXVal,letterYVal);
      }
      //X
     if((eachLetter[i]==88) || (eachLetter[i]==120)){
        image(letterX,letterXVal,letterYVal);
      } 
      //Y
      if((eachLetter[i]==89) || (eachLetter[i]==121)){
        image(letterY,letterXVal,letterYVal);
      }
      //Z
      if((eachLetter[i]==90) || (eachLetter[i]==122)){
        image(letterZ,letterXVal,letterYVal);
      } 
      
      
      letterXVal += 90;
      if(letterXVal >= windowWidth-100){
        letterXVal = windowWidth*0.25;
        letterYVal += 100
        
      }
    }
    else{
      background(255);
      saveButton.hide();
      
      fill(215, 122, 97);
      textFont(font2);
      textSize(80);
      text('ERROR!',windowWidth/2,windowHeight/2);
      
      textSize(20);
      textFont('arial');
      fill(34, 56, 67);
      text('please only use letters a-z, no special characters',
           windowWidth/2,windowHeight*0.6);
    }
  }

}
//
//
//
//
//
//
//
//
//
//
//
//
//SAVE THE COLLAGE CANVAS AS A .JPG FILE
function saveCollage(){
  saveCanvas("myCollage_"+input.value()+".jpg");
}
//
//
//
//
//
//the end :-) 