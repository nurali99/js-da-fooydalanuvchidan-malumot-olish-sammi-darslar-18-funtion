"use strict";
let numberOfNews;
function startPojects(){
  while(numberOfNews=="" || numberOfNews==null || isNaN(numberOfNews)){
    numberOfNews=+prompt("Siz qancha yangilik ko'rdingiz?");
  }
}
startPojects();


const personalNewsDB={
  count:numberOfNews,
  news:{},
  actors:{},
  genres:[],
  privat:false,

};


function rememberNews(){
for(let i=0; i<2; i++){
  const a=prompt("Oxirgi ko'rgan yangiligingizdan bir?"),
  b=prompt("Siz unga qancha baho bergan bo'lardingiz");
  if(a!="" && b!="" && a!=null && b!=null && a.length<=50){
    personalNewsDB.news[a]=b;
    console.log("Tayyor");
  }else{
    console.log("Error");
    i--;
  }
}
}
rememberNews();


function showPersonalLevel(){
if(personalNewsDB.count<10){
  console.log("Siz juda kam yangilik o'qigansiz");
}if(personalNewsDB.count>=10 && personalNewsDB.count<30){
  console.log("Siz o'rtacha yangilik o'qigansiz");
}
if(personalNewsDB.count>=30){
  console.log("Siz yaxshi o'qigansiz");
}else{
  console.log("Error");
}
}
showPersonalLevel();

function showMyDB(hidden){
  if(hidden){
    console.log(personalNewsDB);
  }
}
showMyDB(personalNewsDB.privat);


