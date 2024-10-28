let result; 
let check = false; 


const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");


function verify() {
    let a = parseInt(elementA.value);
    let b = parseInt(elementB.value);
    let c = parseInt(elementC.value);

    
    if (a < b && b < c) {
        result = "Выполняется неравенство: A < B < C"; 
        check = true; 
    } else if (a < b && b > c) {
        result = "Выполняется неравенство: A < B > C"; 
        check = true; 
    } else {
        result = "Ни одно из указанных неравенств не выполняется."; 
        check = false; 
    }

    
    document.getElementById("output").innerText = result; 
    document.getElementById("result").value = result; 
}
function send() {
    if (check) {
       
        document.getElementsByName('a')[0].value = elementA.value;
        document.getElementsByName('b')[0].value = elementB.value;
        document.getElementsByName('c')[0].value = elementC.value;
        document.getElementsByName('result')[0].value = result; 

       
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ошибка ввода данных: неравенства не выполнены.");
    }
}


function verify_send() {
    verify(); 
    send(); 
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send); 


