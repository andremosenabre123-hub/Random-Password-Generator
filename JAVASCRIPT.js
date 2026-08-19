const l = 12;
const lowercase = true;
const uppercase = true;
const numbers = true;
const symbols = true;

function random(l, lowercase, uppercase, numbers, symbols){
    const lowercases = "abcdefghijklmnopqrstuzwxyz";
    const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const symbol = "&#$@%";

    let allowchar = "";
    let password = "";

    allowchar += lowercase ? lowercases : "";
    allowchar += uppercase ? uppercases : "";
    allowchar += numbers ? number : "";
    allowchar += symbols ? symbol : "";

    for(let i = 0; i < l; i++){
        const ra = Math.floor(Math.random() * allowchar.length);
        password += allowchar[ra];
    }
    return password;
}

btn.onclick = function(){
    let finalpassword = random(l, lowercase, uppercase, numbers, symbols);
    text.textContent = `Here's your password: Loading please wait...`;
    setTimeout(function (){
         text.textContent = `Here's your password: ${finalpassword}`;
        finalpassword = "";
    },3000);
}