function verify() {
    let a = parseInt(elementA.innerText); 
    let b = parseInt(elementB.innerText);
    let c = parseInt(elementC.innerText);
    
    console.log(a, b, c);

    let result; 

    // Проверяем первое неравенство A < B < C
    if (a < b && b < c) {
        result = "Выполняется неравенство: A < B < C";
    }
    // Проверяем второе неравенство A < B > C
    else if (a < b && b > c) {
        result = "Выполняется неравенство: A < B > C";
    }
    // Если ни одно из неравенств не выполняется
    else {
        result = "Ни одно из указанных неравенств не выполняется.";
    }

    // Выводим результат на страницу
    document.getElementById("result").innerText = result;
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

