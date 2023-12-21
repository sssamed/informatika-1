console.log("JavaScript kod se moze testirati pomocu konzole.");
console.log("Naredba \"console.log();\" nam sluzi za ispisivanje u konzoli.");
console.log("U JavaScript-u nije obavezno staviti ';' poslije svake linije koda, ali nije ni zabranjeno.")
console.log();

function upozorenje() {

    alert("Ovo je JavaScript upozorenje!");
}

function promjenaBoje() {
    
    let boja =  Math.floor(Math.random()*16777215).toString(16);
    
    document.getElementById("header").style.backgroundColor = "#" + boja;
    document.getElementById("naslov").style.color = "#" + boja;
    
    let buttons = document.getElementsByTagName("button");
    
    for (let i = 0; i < 2; i++) {
        buttons[i].style.backgroundColor = "#" + boja;
    }
};