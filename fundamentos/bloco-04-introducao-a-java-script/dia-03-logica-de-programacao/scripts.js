// Ex. 1
let n = 8;
let string = "";
for(let index=0;index<n;index+=1) {
  for(let superIndex=0;superIndex<n;superIndex+=1) {
    string+="*";

  
  }
  string+="\n"
}
console.log(string);

// Ex.2
n = 8;
cont = 1;
string = "";
for(let index=0;index<n;index+=1) {
    for(let megaIndex=0;megaIndex<cont;megaIndex+=1){
      string+="*";
  }
  string+="\n";
  cont +=1;
}
console.log(string);

// Ex. 3
n = 8;
cont = 1;
string = "";
let invertCont = n - cont;
for(let index=0;index<n;index+=1) {
  for(let ultraIndex=0;ultraIndex<invertCont;ultraIndex+=1){
    string+=" ";
  }
    for(let megaIndex=0;megaIndex<cont;megaIndex+=1){
      string+="*";
  }
  string+="\n";
  cont +=1;
  invertCont = n - cont;
}
console.log(string);

// Ex. 4
n = 7;
cont = 1;
string = "";
invertCont = n - cont;
for(let index=0;index<n;index+=1) {
  for(let ultraIndex=0;ultraIndex<invertCont/2;ultraIndex+=1){if(cont%2==0){break;}
    string+=" ";
  }
    for(let megaIndex=0;megaIndex<cont;megaIndex+=1){if(cont%2==0){break;}
      string+="*";
  }
  for(let superIndex=0;superIndex<invertCont/2;superIndex+=1){if(cont%2==0){break;}
    string += " ";
  }
  if(cont%2==1){string+="\n";}
  cont +=1;
  invertCont = n-cont
  
}
console.log(string);
