function vypis(){
    let mesicInput = prompt("Zadejte číslo měsíce");
    let mesic = document.getElementById("vystup");
    mesic.textContent = "";
    switch(parseInt(mesicInput)){
        case 1:
            mesic.textContent = "Leden";
            break;

        case 2:
            mesic.textContent = "Únor";
            break;
        case 3:
            mesic.textContent = "Březen";
            break;

        case 4:
            mesic.textContent = "Duben";
            break;

        case 5:
            mesic.textContent = "Květen";
            break;
        case 6:
            mesic.textContent = "Červen";
            break;
        case 7:
            mesic.textContent = "Červenec";
            break;
        
        case 8:
            mesic.textContent = "Srpen";
            break;
        case 9:
            mesic.textContent = "Září";
            break;

        case 10:
            mesic.textContent = "Říjen";
            break;

        case 11:
            mesic.textContent = "Listopad";
            break;
        case 12:
            mesic.textContent = "Prosinec";
            break;

        default:
            mesic.textContent = "Neplatné číslo měsíce";
    }
}

function datsudy() {
    let i = 1;
    let vystupElement = document.getElementById("vystup");
    vystupElement.textContent = "";
    while (i <= 20) {
        if (i % 2 === 0) {
            vystupElement.textContent += i + " ";
        }
        i++;
    }
}

function heslo() {
    const spravneheslo = "Dan123"; 
   
    do{
        zadaneheslo = prompt("Zadejte heslo: ")
         if (zadaneheslo==spravneheslo){
            alert("Zadané správné heslo:")
         }
         else{
            alert("Špatné heslo prosím zadejto znovu")
         }

         }

    while(zadaneheslo!=spravneheslo);
}

function tyden(){
    let tydenInput = prompt("Zadejte číslo týdne");
    let tyden = document.getElementById("vystup");
    tyden.textContent = "";
    switch(parseInt(tydenInput)){
        case 1:
            tyden.textContent = "Pondělí";
            break;

        case 2:
            tyden.textContent = "Úterý";
            break;
        case 3:
            tyden.textContent = "Středa";
            break;

        case 4:
            tyden.textContent = "Čtvrtek";
            break;

        case 5:
            tyden.textContent = "Pátek";
            break;
        case 6:
            tyden.textContent = "Sobota";
            break;
        case 7:
            tyden.textContent = "Neděle";
            break;

        default:
            tyden.textContent = "Neplatné číslo týdne";
    }
}

function Fibonacci() {
    let prvniClen = 0;
    let druhyClen = 1;
    let i = 1;
    let vystupElement = document.getElementById("vystup");
    vystupElement.textContent = "";

    while (i <= 10) {
        vystupElement.textContent += prvniClen + " ";
        
        let nasledujiciClen = prvniClen + druhyClen;
        
        prvniClen = druhyClen;
        druhyClen = nasledujiciClen;
        i++;
    }
}

function dynamika(){
    let vstup;
    let soucet = 0;

    do {
        vstup = prompt("Zadejte číslo (pro ukončení zadejte 0):");
        let cislo = parseFloat(vstup);

        if (!isNaN(cislo) && cislo !== 0) {
            soucet += cislo;
        }

    } while (vstup !== "0");

    alert("Součet čísel je: " + soucet);
}
