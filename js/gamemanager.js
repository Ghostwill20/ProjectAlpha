let hero;

function heroes(classType, health, strength, agility, stamina, speed) {
 this.classType = classType;
 this.health = health;
 this.strength = strength;
 this.agility = agility;
 this.stamina = stamina;
 this.speed = speed;
}

let villian;

function Villian(villianType, health, strength, agility, stamina, speed) {
    this.villianType = villianType;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.stamina = stamina;
    this.speed = speed;
   }




let GameManager = {
    setGameStart: function(classType) {
      this.resetHeroes(classType);
      this.setPreFight();
    },
    resetHeroes: function(classType) {
      // switch acts like an if statement
       switch (classType) {
         case "Cortney":
         hero = new heroes(classType, 4500, 200, 80, 80, 50);
         break;
         case "Harcourt":
         hero =  new heroes(classType, 3000, 600, 95, 95, 40);
         break;
         case "Jamila":
         hero = new  heroes(classType, 3500, 800, 70, 60, 38);
         break;
         case "Tyler":
         hero = new heroes(classType, 4600, 850, 70, 55, 20);
         break;
         case "Sarah":
         hero = new heroes(classType, 2700, 300, 90, 90, 20);
         break;
         case "Morgan":
         hero = new heroes(classType, 5000, 200, 100, 51, 50 );
         break;
       }
       // this create my characters stats on html deleted break because html wouldnt know what to do.
       // selects all my content in the interface section // this acts like documentgetelementbyid but is apparently faster.
       let getInterface = document.querySelector(".interface"); 
       getInterface.innerHTML = '<img src="images2/avatar-heroes/' + classType.toLowerCase() + '.jpg" class="images2-avatar-heroes"><div><h3>' + classType + '</h3><p>Health: '+ hero.health + '</p><p>Strength: ' + hero.strength + '</p><p>Agility: ' + hero.agility + '</p><p>Stamina: ' + hero.stamina + '</p><p>Speed ' + hero.speed + '</p></div>';
       },
       // this connects gamemanager stats  to my hero descriptions on my hero page 
    setPreFight: function(){
      let getHeader = document.querySelector(".header");//conects to header section
      let getActions = document.querySelector(".actions");//connects to action section
      let getClassroom = document.querySelector(".classroom");//connects to the classroom section
      getHeader.innerHTML = '<p>Task: Find an enemy!!!!</p>'; //adds to header
      getActions.innerHTML = '<a href ="#" class ="btn-preFight" onclick="GameManager.setPreFight()">Search for an opponent!!!!</a>';
      getClassroom.style.visibility= "visible";//makes this visible inside browser
},
setFight: function() {
  let getHeader = document.querySelector(".header");//conects to header section
  let getActions = document.querySelector(".actions");//connects to action section
  let getEnemy = document.querySelector(".enemy");//connects to the classroom section
 //this is the enemy section for stats
let villian00 =  Villian("Carlos", 5000, 900, 55, 80, 50);
let villian01 =  Villian("Charles", 1500, 750, 95, 49);
let villian02 =  Villian("Darnell", 3000, 300, 100, 90, 48);
let villian03 =  Villian("Lexie", 3800, 890, 85, 85, 50);
let villian04 =  Villian("Nick", 3000, 300, 100, 95, 60);
let villian05 =  Villian("Taron", 3000, 800, 60, 75, 40);
//next is randomize the villian for the arena 
let ChooseRandomVillian = Math.Floor(Math.random() * Math.Floor(2));// this is how we get random number
  switch (ChooseRandomVillian) {
    case 0:
      Villian = villian00;
      break;
    case 1:
      Villian = villian01;
      break;
    case 2:
      Villian = villian02;
      break;
    case 3:
      Villian = villian03;
      break;
    case 4:
      Villian = villian04;
      break;    
    case 5:
      Villian = villian05;
      break;
}
getHeader.innerHTML =   '<p>Task: Choose your move!!!!</p>';
getActions.innerHTML = '<a href ="#" class ="btn-preFight" onclick="PlayersMoves.calcAttack()"Attack</a>';
getVillian.innerHTML =  '<img src="images2/avatar-villians/' + villian.villianType.toLowerCase() + '.jpg" class="images2-avatar-heroesc"><div><h3>' + villian.villianType + '</h3><p>Health: '+ villian.health + '</p><p>Strength: ' + hero.strength + '</p><p>Agility: ' + villian.agility + '</p><p>Stamina: ' + villian.stamina + '</p><p>Speed ' + villian.speed + '</p></div>';
 }
}