const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let option1El=document.getElementById("password1")
let option2El=document.getElementById("password2")



function generateButton() {
  
  option1El.textContent=""
  option2El.textContent=""
  
  for (let i=0;i<10;i++){
    let password1Index=Math.floor(Math.random()*characters.length)
    let password2Index=Math.floor(Math.random()*characters.length)
    
    option1El.textContent+=characters[password1Index]
    option2El.textContent+=characters[password2Index]
  }
}

const genBtn=document.getElementById("generateButton")
genBtn.addEventListener("click",generateButton)