const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPasswordEl = document.getElementById("first-password-el")
let secondPasswordEl = document.getElementById("second-password-el")

function getPasswords() {
    firstPasswordEl.textContent = generatePasswords()
    secondPasswordEl.textContent = generatePasswords()
}

function generatePasswords() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    console.log(password)
    return password
}
