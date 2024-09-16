const copy = document.getElementById('copy');
const generate = document.getElementById('generate');
var dispass = document.getElementById('dispass');

const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'];

 function newpassword(){
    let pass='';
    for (let i = 0; i < 12; i++) {
        let k =Math.floor(Math.random()*(81-0+1));
        pass += characters[k];
    }
    dispass.innerText = pass;
    console.log(pass);
 }

 function copier(){
    navigator.clipboard.writeText(dispass.innerText);
 }